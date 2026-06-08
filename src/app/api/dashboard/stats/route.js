import { NextResponse } from 'next/server'
import { getAuthPayload } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const payload = await getAuthPayload()
    if (!payload || payload.accountRole !== 3) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const clientId = payload.clientId

    const [received, accepted, declined, recent] = await Promise.all([
      prisma.proposal.count({
        where: { clientId, statusId: { in: [2, 3, 4, 5, 6] } },
      }),
      prisma.proposal.count({ where: { clientId, statusId: 5 } }),
      prisma.proposal.count({ where: { clientId, statusId: 6 } }),
      prisma.proposal.findMany({
        where: { clientId, statusId: { in: [2, 3, 4, 5, 6] } },
        orderBy: { dateCreated: 'desc' },
        take: 5,
        include: { proposalStatus: true },
      }),
    ])

    return NextResponse.json({
      stats: { received, accepted, declined },
      recentProposals: recent.map(p => ({
        proposalId: p.proposalId,
        slug: p.slug,
        title: p.proposalTitle,
        type: p.proposalType,
        status: p.proposalStatus.status,
        statusId: p.statusId,
        dateCreated: p.dateCreated,
        statusUpdated: p.statusUpdated,
      })),
    })
  } catch (err) {
    console.error('Dashboard stats error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
