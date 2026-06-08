import { requireAuth } from '@/lib/auth'
import ProposalsArchiveClient from './ProposalsArchiveClient'

export const metadata = { title: 'Proposals — OnePoint Client Portal' }

export default async function ProposalsPage() {
  await requireAuth()
  return <ProposalsArchiveClient />
}
