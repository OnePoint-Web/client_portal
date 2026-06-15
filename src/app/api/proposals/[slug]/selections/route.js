import { NextResponse } from 'next/server'
import { getAuthPayload } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function PATCH(req, { params }) {
    try {
        const payload = await getAuthPayload()
        if (!payload || payload.accountRole !== 3) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { slug } = await params

        const proposal = await prisma.proposal.findUnique({
            where: { slug },
            select: {
                proposalId: true,
                clientId: true,
                statusId: true,
                serviceProductOffers: {
                    select: {
                        serviceProductOfferId: true,
                        isMultipleChoice: true,
                        offerEntries: { select: { offerEntryId: true } }
                    }
                }
            }
        })

        if (!proposal) {
            return NextResponse.json({ error: 'Not found' }, { status: 404 })
        }

        if (proposal.clientId !== payload.clientId) {
            return NextResponse.json({ error: 'Access denied' }, { status: 403 })
        }

        if (![3, 4].includes(proposal.statusId)) {
            return NextResponse.json(
                { error: 'Selections cannot be changed on a decided proposal' },
                { status: 400 }
            )
        }

        const offer = proposal.serviceProductOffers?.[0]
        if (!offer?.isMultipleChoice) {
            return NextResponse.json(
                { error: 'This proposal does not support item selection' },
                { status: 400 }
            )
        }

        const body = await req.json()
        const { selections } = body

        if (!Array.isArray(selections) || selections.length === 0) {
            return NextResponse.json({ error: 'Invalid selections payload' }, { status: 400 })
        }

        const validIds = new Set(offer.offerEntries.map(e => e.offerEntryId))
        const hasInvalidId = selections.some(s => !validIds.has(s.offerEntryId))
        if (hasInvalidId) {
            return NextResponse.json({ error: 'Invalid entry IDs' }, { status: 400 })
        }

        await prisma.$transaction(
            selections.map(({ offerEntryId, isSelected }) =>
                prisma.offerEntry.update({
                    where: { offerEntryId },
                    data: { isSelected: Boolean(isSelected) }
                })
            )
        )

        return NextResponse.json({ success: true })
    } catch (err) {
        console.error('Selections update error:', err)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
