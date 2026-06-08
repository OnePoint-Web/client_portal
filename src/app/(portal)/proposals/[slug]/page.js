import { requireAuth } from '@/lib/auth'
import ProposalDetailClient from './ProposalDetailClient'

export const metadata = { title: 'Proposal — OnePoint Client Portal' }

export default async function ProposalDetailPage({ params }) {
  await requireAuth()
  const { slug } = await params
  return <ProposalDetailClient slug={slug} />
}
