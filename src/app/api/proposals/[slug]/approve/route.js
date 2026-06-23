import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { getAuthPayload } from '@/lib/auth'
import prisma from '@/lib/prisma'

const resend = new Resend(process.env.RESEND_API_KEY)

function creatorNotificationHtml(creatorName, clientName, companyName, proposalTitle, pdfUrl) {
  return `
    <!DOCTYPE html>
    <html>
    <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f4f4f4;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 0;">
        <tr><td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <tr>
              <td style="background:#1A1A2E;padding:28px 40px;text-align:center;">
                <span style="color:#F22044;font-weight:bold;font-size:22px;letter-spacing:1px;">OnePoint</span>
              </td>
            </tr>
            <tr>
              <td style="padding:40px;">
                <p style="color:#1A202C;font-size:16px;margin:0 0 12px;">Hi ${creatorName},</p>
                <p style="color:#4A5568;font-size:15px;line-height:1.6;margin:0 0 20px;">
                  Great news — your proposal has been <strong style="color:#22C55E;">approved</strong>!
                </p>
                <p style="color:#1A1A2E;font-size:18px;font-weight:bold;margin:0 0 8px;">${proposalTitle}</p>
                <p style="color:#718096;font-size:14px;margin:0 0 28px;">
                  Approved by <strong>${clientName}</strong>${companyName ? ` · ${companyName}` : ''}
                </p>
                <table cellpadding="0" cellspacing="0" style="margin:0 0 32px;">
                  <tr>
                    <td style="background:#1A1A2E;border-radius:8px;padding:14px 32px;">
                      <a href="${pdfUrl}" style="color:#ffffff;font-weight:bold;font-size:15px;text-decoration:none;display:block;">
                        View Approved Proposal PDF
                      </a>
                    </td>
                  </tr>
                </table>
                <p style="color:#4A5568;font-size:14px;margin:0;">
                  Regards,<br/><strong>OnePoint</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td style="background:#F8F9FC;padding:20px 40px;text-align:center;">
                <p style="color:#A0AEC0;font-size:12px;margin:0;">© ${new Date().getFullYear()} OnePoint IT. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </td></tr>
      </table>
    </body>
    </html>
  `
}

function clientThankYouHtml(clientFirstName, proposalTitle, pdfUrl) {
  return `
    <!DOCTYPE html>
    <html>
    <body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f4f4f4;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 0;">
        <tr><td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
            <tr>
              <td style="background:#1A1A2E;padding:28px 40px;text-align:center;">
                <span style="color:#F22044;font-weight:bold;font-size:22px;letter-spacing:1px;">OnePoint</span>
              </td>
            </tr>
            <tr>
              <td style="padding:40px;">
                <p style="color:#1A202C;font-size:16px;margin:0 0 12px;">Dear ${clientFirstName},</p>
                <p style="color:#4A5568;font-size:15px;line-height:1.6;margin:0 0 20px;">
                  Thank you for approving our proposal. We're excited to move forward with you!
                </p>
                <p style="color:#1A1A2E;font-size:18px;font-weight:bold;margin:0 0 28px;">${proposalTitle}</p>
                <p style="color:#4A5568;font-size:15px;line-height:1.6;margin:0 0 28px;">
                  You can download a copy of the approved proposal using the button below for your records.
                </p>
                <table cellpadding="0" cellspacing="0" style="margin:0 0 32px;">
                  <tr>
                    <td style="background:#F22044;border-radius:8px;padding:14px 32px;">
                      <a href="${pdfUrl}" style="color:#ffffff;font-weight:bold;font-size:15px;text-decoration:none;display:block;">
                        Download Approved Proposal
                      </a>
                    </td>
                  </tr>
                </table>
                <p style="color:#4A5568;font-size:14px;margin:0;">
                  We'll be in touch shortly to discuss next steps.<br/><br/>
                  Warm regards,<br/><strong>OnePoint IT</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td style="background:#F8F9FC;padding:20px 40px;text-align:center;">
                <p style="color:#A0AEC0;font-size:12px;margin:0;">© ${new Date().getFullYear()} OnePoint IT. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </td></tr>
      </table>
    </body>
    </html>
  `
}

export async function POST(req, { params }) {
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
        proposalTitle: true,
        user: { select: { firstName: true, lastName: true, userEmail: true } },
        clientProfile: {
          select: {
            companyName: true,
            user: { select: { userEmail: true } },
          },
        },
      },
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

    const proposalsDomain = process.env.NEXT_PUBLIC_PROPOSALS_DOMAIN ?? 'http://localhost:3000'
    const pdfUrl = `${proposalsDomain}/api/proposals/${slug}/pdf`

    const creatorEmail = proposal.user?.userEmail
    const clientEmail = proposal.clientProfile?.user?.userEmail ?? payload.email
    const creatorName = proposal.user ? `${proposal.user.firstName} ${proposal.user.lastName}` : 'Team'
    const companyName = proposal.clientProfile?.companyName ?? ''

    const fromAddress = `${process.env.RESEND_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`

    await Promise.allSettled([
      creatorEmail && resend.emails.send({
        from: fromAddress,
        to: creatorEmail,
        subject: `Proposal Approved: ${proposal.proposalTitle}`,
        html: creatorNotificationHtml(creatorName, `${payload.firstName} ${payload.lastName}`, companyName, proposal.proposalTitle, pdfUrl),
      }),
      clientEmail && resend.emails.send({
        from: fromAddress,
        to: clientEmail,
        subject: `Thank you for approving: ${proposal.proposalTitle}`,
        html: clientThankYouHtml(payload.firstName, proposal.proposalTitle, pdfUrl),
      }),
    ])

    return NextResponse.json({ success: true, pdfUrl })
  } catch (err) {
    console.error('Approve error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
