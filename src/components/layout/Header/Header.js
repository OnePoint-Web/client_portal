'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import {
  RiDashboardLine,
  RiFileTextLine,
  RiBuildingLine,
  RiSettings3Line,
  RiSearchLine,
  RiBellLine,
  RiLogoutCircleRLine,
  RiUserLine,
  RiCheckLine,
  RiTimeLine,
  RiFileAddLine,
} from 'react-icons/ri'

const NAV_LINKS = [
  { href: '/dashboard', label: 'Dashboard', icon: RiDashboardLine },
  { href: '/proposals', label: 'Proposals', icon: RiFileTextLine },
  { href: '/company-info', label: 'Company Info', icon: RiBuildingLine },
  { href: '/settings', label: 'Settings', icon: RiSettings3Line },
]

const SEARCH_PAGES = [
  { label: 'Dashboard', href: '/dashboard', desc: 'Overview and stats' },
  { label: 'Proposals Archive', href: '/proposals', desc: 'All your proposals' },
  { label: 'Company Information', href: '/company-info', desc: 'OnePoint company details' },
  { label: 'Settings', href: '/settings', desc: 'Account preferences' },
]

function NotificationIcon(type) {
  if (type === 'proposal_approved' || type === 'proposal_accepted') return RiCheckLine
  if (type === 'proposal_viewed') return RiFileTextLine
  if (type === 'proposal_created') return RiFileAddLine
  return RiBellLine
}

export default function Header() {
  const { user, logout } = useAuth()
  const pathname = usePathname()
  const router = useRouter()

  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [notifOpen, setNotifOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [notifications, setNotifications] = useState([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const notifRef = useRef(null)
  const profileRef = useRef(null)
  const searchRef = useRef(null)

  useEffect(() => {
    if (!user) return
    fetch('/api/notifications')
      .then(r => r.json())
      .then(data => {
        setNotifications(data.notifications ?? [])
        setUnreadCount(data.notifications?.filter(n => !n.isRead).length ?? 0)
      })
      .catch(() => {})
  }, [user])

  useEffect(() => {
    function handleClick(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) setNotifOpen(false)
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false)
      if (searchRef.current && !searchRef.current.contains(e.target)) setSearchOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const filteredPages = SEARCH_PAGES.filter(p =>
    p.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.desc.toLowerCase().includes(searchQuery.toLowerCase())
  )

  async function markAllRead() {
    await fetch('/api/notifications', { method: 'PATCH' })
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })))
    setUnreadCount(0)
  }

  const initials = user
    ? `${user.firstName?.[0] ?? ''}${user.lastName?.[0] ?? ''}`.toUpperCase()
    : 'CL'

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="px-4 lg:px-6 h-16 flex items-center gap-4">

        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-2.5 flex-shrink-0">
          {/* <div className="w-8 h-8 bg-[#F22044] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">1P</span>
          </div> */}
          <span className="hidden sm:block text-[#1A1A2E] font-bold text-base tracking-wide">OnePoint</span>
        </Link>

        {/* Nav — desktop */}
        <nav className="hidden lg:flex items-center gap-1 ml-4">
          {NAV_LINKS.map(link => {
            const Icon = link.icon
            const active = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? 'bg-[#FFF0F3] text-[#F22044]'
                    : 'text-[#718096] hover:bg-[#F8F9FC] hover:text-[#1A202C]'
                }`}
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Search */}
        <div className="relative" ref={searchRef}>
          <button
            onClick={() => { setSearchOpen(v => !v); setSearchQuery('') }}
            className="flex items-center gap-2 px-3 py-2 bg-[#F8F9FC] border border-[#E2E8F0] rounded-xl text-sm text-[#A0AEC0] hover:border-[#CBD5E0] transition-all w-44 hidden md:flex"
          >
            <RiSearchLine className="w-4 h-4 flex-shrink-0" />
            <span>Search...</span>
          </button>
          <button
            onClick={() => { setSearchOpen(v => !v); setSearchQuery('') }}
            className="md:hidden p-2 text-[#718096] hover:text-[#1A202C] rounded-lg hover:bg-[#F8F9FC] transition-all"
          >
            <RiSearchLine className="w-5 h-5" />
          </button>

          {searchOpen && (
            <div className="absolute right-0 top-full mt-2 w-72 bg-white border border-[#E2E8F0] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] overflow-hidden">
              <div className="p-3 border-b border-[#E2E8F0]">
                <div className="flex items-center gap-2 px-3 py-2 bg-[#F8F9FC] rounded-xl">
                  <RiSearchLine className="w-4 h-4 text-[#A0AEC0]" />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search pages..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-sm text-[#1A202C] placeholder-[#A0AEC0] outline-none"
                  />
                </div>
              </div>
              <div className="py-1 max-h-64 overflow-y-auto">
                {filteredPages.length === 0 ? (
                  <p className="text-center text-[#A0AEC0] text-sm py-6">No results found</p>
                ) : (
                  filteredPages.map(page => (
                    <button
                      key={page.href}
                      onClick={() => { router.push(page.href); setSearchOpen(false) }}
                      className="w-full flex flex-col items-start px-4 py-2.5 hover:bg-[#F8F9FC] transition-colors"
                    >
                      <span className="text-sm font-medium text-[#1A202C]">{page.label}</span>
                      <span className="text-xs text-[#A0AEC0]">{page.desc}</span>
                    </button>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => { setNotifOpen(v => !v); setProfileOpen(false) }}
            className="relative p-2 text-[#718096] hover:text-[#1A202C] rounded-lg hover:bg-[#F8F9FC] transition-all"
          >
            <RiBellLine className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#F22044] rounded-full text-white text-[10px] font-bold flex items-center justify-center">
                {unreadCount > 9 ? '9+' : unreadCount}
              </span>
            )}
          </button>

          {notifOpen && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-[#E2E8F0] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#E2E8F0]">
                <div>
                  <h3 className="text-sm font-semibold text-[#1A202C]">Notifications</h3>
                  {unreadCount > 0 && <p className="text-xs text-[#718096]">{unreadCount} unread</p>}
                </div>
                {unreadCount > 0 && (
                  <button onClick={markAllRead} className="text-xs text-[#F22044] font-medium hover:underline">
                    Mark all read
                  </button>
                )}
              </div>

              <div className="max-h-80 overflow-y-auto scrollbar-thin">
                {notifications.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-10 gap-2">
                    <RiBellLine className="w-8 h-8 text-[#E2E8F0]" />
                    <p className="text-sm text-[#A0AEC0]">No notifications yet</p>
                  </div>
                ) : (
                  notifications.slice(0, 10).map(n => {
                    const Icon = NotificationIcon(n.notificationType)
                    return (
                      <div
                        key={n.notificationId}
                        className={`flex items-start gap-3 px-4 py-3 hover:bg-[#F8F9FC] transition-colors ${!n.isRead ? 'bg-[#FFF8F9]' : ''}`}
                      >
                        <div className={`mt-0.5 w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${!n.isRead ? 'bg-[#FFF0F3]' : 'bg-[#F8F9FC]'}`}>
                          <Icon className={`w-4 h-4 ${!n.isRead ? 'text-[#F22044]' : 'text-[#A0AEC0]'}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-[#1A202C] leading-snug">{n.title}</p>
                          <p className="text-xs text-[#718096] mt-0.5 leading-snug line-clamp-2">{n.message}</p>
                          <p className="text-xs text-[#A0AEC0] mt-1">
                            {new Date(n.createdAt).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' })}
                          </p>
                        </div>
                        {!n.isRead && (
                          <div className="w-2 h-2 rounded-full bg-[#F22044] flex-shrink-0 mt-1.5" />
                        )}
                      </div>
                    )
                  })
                )}
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => { setProfileOpen(v => !v); setNotifOpen(false) }}
            className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-[#F8F9FC] transition-all"
          >
            <div className="w-8 h-8 rounded-lg bg-[#1A1A2E] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs">{initials}</span>
            </div>
            <div className="hidden md:block text-left">
              <p className="text-xs font-semibold text-[#1A202C] leading-tight">
                {user ? `${user.firstName} ${user.lastName}` : 'Client'}
              </p>
              <p className="text-xs text-[#A0AEC0] leading-tight truncate max-w-28">
                {user?.companyName ?? 'Client Portal'}
              </p>
            </div>
            <svg className="hidden md:block w-3.5 h-3.5 text-[#A0AEC0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {profileOpen && (
            <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-[#E2E8F0] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] overflow-hidden">
              <div className="px-4 py-3 border-b border-[#E2E8F0]">
                <p className="text-sm font-semibold text-[#1A202C]">
                  {user ? `${user.firstName} ${user.lastName}` : 'Client'}
                </p>
                <p className="text-xs text-[#A0AEC0] truncate">{user?.email}</p>
              </div>
              <div className="py-1">
                <Link
                  href="/settings"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-[#718096] hover:bg-[#F8F9FC] hover:text-[#1A202C] transition-colors"
                >
                  <RiSettings3Line className="w-4 h-4" />
                  Settings
                </Link>
                <button
                  onClick={logout}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors"
                >
                  <RiLogoutCircleRLine className="w-4 h-4" />
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile nav toggle */}
        <button
          onClick={() => setMobileNavOpen(v => !v)}
          className="lg:hidden p-2 text-[#718096] hover:text-[#1A202C] rounded-lg hover:bg-[#F8F9FC] transition-all"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileNavOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {/* Mobile nav drawer */}
      {mobileNavOpen && (
        <div className="lg:hidden border-t border-[#E2E8F0] bg-white px-4 py-2">
          {NAV_LINKS.map(link => {
            const Icon = link.icon
            const active = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileNavOpen(false)}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all ${
                  active ? 'text-[#F22044] bg-[#FFF0F3]' : 'text-[#718096] hover:bg-[#F8F9FC]'
                }`}
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
