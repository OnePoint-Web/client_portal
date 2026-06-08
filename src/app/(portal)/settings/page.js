import { requireAuth } from '@/lib/auth'
import SettingsClient from './SettingsClient'

export const metadata = { title: 'Settings — OnePoint Client Portal' }

export default async function SettingsPage() {
  const user = await requireAuth()
  return <SettingsClient user={user} />
}
