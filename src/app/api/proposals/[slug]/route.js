import { NextResponse } from 'next/server'
import { getAuthPayload } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function GET(req, { params }) {
  try {
    const payload = await getAuthPayload()
    if (!payload || payload.accountRole !== 3) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { slug } = await params

    const proposal = await prisma.proposal.findUnique({
      where: { slug },
      include: {
        proposalStatus: true,
        clientProfile: {
          include: {
            user: {
              select: { firstName: true, lastName: true, userEmail: true },
            },
          },
        },
        selectedMembers: {
          include: { teamMember: true },
        },
        timelines: {
          include: { timelineScopeItems: true },
          orderBy: { timelineId: 'asc' },
        },
        slaOffers: {
          include: {
            packageDealItem: {
              include: { packageDealEntries: { orderBy: { displayOrder: 'asc' } } },
              orderBy: { displayOrder: 'asc' },
            },
          },
        },
        serviceProductOffers: {
          include: {
            offerEntries: { orderBy: { displayOrder: 'asc' } },
          },
        },
      },
    })

    if (!proposal) {
      return NextResponse.json({ error: 'Proposal not found' }, { status: 404 })
    }

    if (proposal.clientId !== payload.clientId) {
      return NextResponse.json({ error: 'Access denied' }, { status: 403 })
    }

    // Track first view
    const isFirstView = !proposal.firstViewedAt
    if (isFirstView) {
      await prisma.proposal.update({
        where: { slug },
        data: {
          firstViewedAt: new Date(),
          lastViewedAt: new Date(),
          viewCount: { increment: 1 },
          proposalStatus: proposal.statusId === 3
            ? { connect: { statusId: 4 } }
            : undefined,
        },
      })

      await prisma.proposalView.create({
        data: { proposalId: proposal.proposalId, clientId: payload.clientId },
      })
    } else {
      await prisma.proposal.update({
        where: { slug },
        data: { lastViewedAt: new Date(), viewCount: { increment: 1 } },
      })
    }

    return NextResponse.json({ proposal })
  } catch (err) {
    console.error('Proposal fetch error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
