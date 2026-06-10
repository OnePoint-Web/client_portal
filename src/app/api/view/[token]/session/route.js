import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(req, { params }) {
  try {
    const { token } = await params

    const shareToken = await prisma.proposalShareToken.findUnique({
      where: { token },
      select: { tokenId: true, proposalId: true, isPortalUser: true, portalUserId: true, expiresAt: true },
    })

    if (!shareToken) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    if (shareToken.expiresAt && shareToken.expiresAt < new Date()) {
      return NextResponse.json({ error: 'Link expired' }, { status: 410 })
    }

    const body = await req.json()
    const { action, sessionId } = body

    if (action === 'start') {
      let clientId = null
      if (shareToken.isPortalUser && shareToken.portalUserId) {
        const profile = await prisma.clientProfile.findUnique({
          where: { userId: shareToken.portalUserId },
          select: { clientId: true },
        })
        clientId = profile?.clientId ?? null
      }

      const session = await prisma.proposalSession.create({
        data: {
          proposalId: shareToken.proposalId,
          tokenId: shareToken.tokenId,
          clientId,
        },
      })

      return NextResponse.json({ sessionId: session.sessionId })
    }

    if (action === 'heartbeat') {
      if (!sessionId) return NextResponse.json({ error: 'sessionId required' }, { status: 400 })

      await prisma.proposalSession.update({
        where: { sessionId },
        data: { lastActivityAt: new Date() },
      })

      return NextResponse.json({ ok: true })
    }

    if (action === 'end') {
      if (!sessionId) return NextResponse.json({ error: 'sessionId required' }, { status: 400 })

      const session = await prisma.proposalSession.findUnique({
        where: { sessionId },
        select: { startedAt: true, endedAt: true },
      })

      if (!session || session.endedAt) {
        return NextResponse.json({ ok: true })
      }

      const durationSeconds = Math.round((Date.now() - new Date(session.startedAt).getTime()) / 1000)

      await prisma.proposalSession.update({
        where: { sessionId },
        data: { endedAt: new Date(), durationSeconds },
      })

      return NextResponse.json({ ok: true })
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (err) {
    console.error('Session tracking error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
