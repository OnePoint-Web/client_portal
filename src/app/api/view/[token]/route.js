import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(req, { params }) {
  try {
    const { token } = await params

    const shareToken = await prisma.proposalShareToken.findUnique({
      where: { token },
    })

    if (!shareToken) {
      return NextResponse.json({ error: 'Proposal link not found' }, { status: 404 })
    }

    if (shareToken.expiresAt && shareToken.expiresAt < new Date()) {
      return NextResponse.json({ error: 'This proposal link has expired' }, { status: 410 })
    }

    const proposal = await prisma.proposal.findUnique({
      where: { proposalId: shareToken.proposalId },
      include: {
        proposalStatus: true,
        clientProfile: {
          include: {
            user: { select: { firstName: true, lastName: true, userEmail: true } },
          },
        },
        selectedMembers: { include: { teamMember: true } },
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
          include: { offerEntries: { orderBy: { displayOrder: 'asc' } } },
        },
      },
    })

    if (!proposal) {
      return NextResponse.json({ error: 'Proposal not found' }, { status: 404 })
    }

    const isFirstView = !proposal.firstViewedAt

    // Resolve portal clientId if the token belongs to a portal user
    let portalClientId = null
    if (shareToken.isPortalUser && shareToken.portalUserId) {
      const profile = await prisma.clientProfile.findUnique({
        where: { userId: shareToken.portalUserId },
        select: { clientId: true },
      })
      portalClientId = profile?.clientId ?? null
    }

    await prisma.$transaction(async (tx) => {
      // Update view tracking on proposal
      await tx.proposal.update({
        where: { proposalId: proposal.proposalId },
        data: {
          firstViewedAt: proposal.firstViewedAt ?? new Date(),
          lastViewedAt: new Date(),
          viewCount: { increment: 1 },
          ...(isFirstView && proposal.statusId === 3 ? { statusId: 4, statusUpdated: new Date() } : {}),
        },
      })

      // Record this view
      await tx.proposalView.create({
        data: {
          proposalId: proposal.proposalId,
          clientId: portalClientId,
          tokenId: shareToken.tokenId,
        },
      })

      // Mark token first use
      if (!shareToken.usedAt) {
        await tx.proposalShareToken.update({
          where: { tokenId: shareToken.tokenId },
          data: { usedAt: new Date() },
        })
      }

      // On first-ever view: notify the staff member who created the proposal
      if (isFirstView) {
        await tx.activityLogs.create({
          data: {
            entityType: 'proposals',
            entityId: proposal.slug,
            action: 'proposal_viewed',
            performedBy: proposal.createdBy,
            performedByRole: 'client',
            metaData: {
              executor: shareToken.recipientEmail,
              proposalTitle: proposal.proposalTitle,
            },
          },
        })

        await tx.notification.create({
          data: {
            userId: proposal.createdBy,
            title: 'Proposal Viewed',
            message: `${shareToken.recipientEmail} viewed "${proposal.proposalTitle}"`,
            entityType: 'proposals',
            entityId: proposal.slug,
            notificationType: 'proposal_viewed',
          },
        })
      }
    })

    return NextResponse.json({ proposal })
  } catch (err) {
    console.error('View token fetch error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
