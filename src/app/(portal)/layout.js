import { requireAuth } from '@/lib/auth'
import Header from '@/components/layout/Header/Header'

export default async function PortalLayout({ children }) {
  await requireAuth()

  return (
    <div className="min-h-screen bg-[#F8F9FC] flex flex-col">
      <Header />
      <main className="flex-1 px-4 lg:px-8 py-6 max-w-7xl mx-auto w-full">
        {children}
      </main>
    </div>
  )
}
