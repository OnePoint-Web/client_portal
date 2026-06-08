import { NextResponse } from 'next/server'
import { getAuthPayload } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function GET(req) {
  try {
    const payload = await getAuthPayload()
    if (!payload || payload.accountRole !== 3) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const search = searchParams.get('search') ?? ''
    const status = searchParams.get('status') ?? ''
    const sort = searchParams.get('sort') ?? 'newest'
    const page = parseInt(searchParams.get('page') ?? '1')
    const limit = parseInt(searchParams.get('limit') ?? '12')

    const where = {
      clientId: payload.clientId,
      ...(search && {
        proposalTitle: { contains: search },
      }),
      ...(status && {
        proposalStatus: { status },
      }),
    }

    const orderBy = (() => {
      switch (sort) {
        case 'oldest': return { dateCreated: 'asc' }
        case 'alpha_asc': return { proposalTitle: 'asc' }
        case 'alpha_desc': return { proposalTitle: 'desc' }
        default: return { dateCreated: 'desc' }
      }
    })()

    const [proposals, total] = await Promise.all([
      prisma.proposal.findMany({
        where,
        orderBy,
        skip: (page - 1) * limit,
        take: limit,
        include: {
          proposalStatus: true,
          clientProfile: {
            include: { user: { select: { firstName: true, lastName: true, userEmail: true } } },
          },
        },
      }),
      prisma.proposal.count({ where }),
    ])

    return NextResponse.json({
      proposals: proposals.map(p => ({
        proposalId: p.proposalId,
        slug: p.slug,
        title: p.proposalTitle,
        type: p.proposalType,
        status: p.proposalStatus.status,
        statusId: p.statusId,
        dateCreated: p.dateCreated,
        statusUpdated: p.statusUpdated,
      })),
      total,
      page,
      totalPages: Math.ceil(total / limit),
    })
  } catch (err) {
    console.error('Proposals error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
