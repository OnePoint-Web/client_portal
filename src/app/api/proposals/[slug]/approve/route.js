import { NextResponse } from 'next/server'
import { getAuthPayload } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function POST(req, { params }) {
  try {
    const payload = await getAuthPayload()
    if (!payload || payload.accountRole !== 3) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { slug } = await params

    const proposal = await prisma.proposal.findUnique({
      where: { slug },
      select: { proposalId: true, clientId: true, statusId: true, proposalTitle: true },
    })

    if (!proposal) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    if (proposal.clientId !== payload.clientId) return NextResponse.json({ error: 'Access denied' }, { status: 403 })
    if (proposal.statusId === 5) return NextResponse.json({ error: 'Already approved' }, { status: 400 })
    if (proposal.statusId === 6) return NextResponse.json({ error: 'Cannot approve a declined proposal' }, { status: 400 })

    await prisma.proposal.update({
      where: { slug },
      data: { statusId: 5, statusUpdated: new Date() },
    })

    await prisma.activityLogs.create({
      data: {
        entityType: 'proposals',
        entityId: slug,
        action: 'proposal_accepted',
        performedBy: payload.userId,
        performedByRole: 'client',
        metaData: { proposalTitle: proposal.proposalTitle },
      },
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Approve error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
