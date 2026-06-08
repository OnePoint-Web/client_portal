import { NextResponse } from 'next/server'
import { getAuthPayload } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const payload = await getAuthPayload()
    if (!payload || payload.accountRole !== 3) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const activity = await prisma.activityLogs.findMany({
      where: { performedBy: payload.userId },
      orderBy: { createdAt: 'desc' },
      take: 10,
    })

    return NextResponse.json({ activity })
  } catch (err) {
    console.error('Activity error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
