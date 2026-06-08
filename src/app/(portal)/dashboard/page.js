import { requireAuth } from '@/lib/auth'
import DashboardClient from './DashboardClient'

export const metadata = { title: 'Dashboard — OnePoint Client Portal' }

export default async function DashboardPage() {
  const user = await requireAuth()
  return <DashboardClient user={user} />
}
