'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  RiFileTextLine,
  RiCheckboxCircleLine,
  RiForbidLine,
  RiInboxLine,
  RiArrowRightLine,
  RiHistoryLine, RiTimeLine,
  RiEyeLine,
  RiHandHeartLine,
  RiDislikeLine,
  RiFileAddLine,
} from 'react-icons/ri'
import StatusBadge from '@/components/ui/StatusBadge/StatusBadge'

function formatDate(d) {
  if (!d) return '—'
  return new Date(d).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })
}

function formatDateRelative(d) {
  if (!d) return ''
  const diff = Date.now() - new Date(d).getTime()
  const days = Math.floor(diff / 86400000)
  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days < 7) return `${days} days ago`
  return formatDate(d)
}

const ACTIVITY_ICONS = {
  proposal_viewed: { icon: RiEyeLine, color: 'text-blue-500', bg: 'bg-blue-50', label: 'Viewed proposal' },
  proposal_accepted: { icon: RiHandHeartLine, color: 'text-green-500', bg: 'bg-green-50', label: 'Approved proposal' },
  proposal_rejected: { icon: RiDislikeLine, color: 'text-red-500', bg: 'bg-red-50', label: 'Declined proposal' },
  proposal_created: { icon: RiFileAddLine, color: 'text-purple-500', bg: 'bg-purple-50', label: 'Received proposal' },
}

export default function DashboardClient({ user }) {
  const [stats, setStats] = useState(null)
  const [recentProposals, setRecentProposals] = useState([])
  const [activity, setActivity] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('/api/dashboard/stats').then(r => r.json()),
      fetch('/api/activity').then(r => r.json()),
    ]).then(([statsData, activityData]) => {
      setStats(statsData.stats)
      setRecentProposals(statsData.recentProposals ?? [])
      setActivity(activityData.activity ?? [])
    }).catch(() => {}).finally(() => setLoading(false))
  }, [])

  const statCards = [
    {
      label: 'Received',
      value: stats?.received ?? '—',
      icon: RiInboxLine,
      color: 'text-[#F22044]',
      bg: 'bg-[#FFF0F3]',
      border: 'border-[#FECDD3]',
    },
    {
      label: 'Accepted',
      value: stats?.accepted ?? '—',
      icon: RiCheckboxCircleLine,
      color: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-200',
    },
    {
      label: 'Declined',
      value: stats?.declined ?? '—',
      icon: RiForbidLine,
      color: 'text-red-500',
      bg: 'bg-red-50',
      border: 'border-red-200',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="bg-[#1A1A2E] rounded-2xl px-6 py-5 flex items-center justify-between relative overflow-hidden">
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#F22044] opacity-10" />
        <div className="absolute -bottom-10 right-20 w-24 h-24 rounded-full bg-[#F22044] opacity-6" />
        <div className="relative z-10">
          <p className="text-white/60 text-sm mb-0.5">Welcome back,</p>
          <h1 className="text-white font-bold text-xl">
            {user.firstName} {user.lastName}
          </h1>
          {user.companyName && (
            <p className="text-white/50 text-sm mt-0.5">{user.companyName}</p>
          )}
        </div>
        <div className="relative z-10 hidden sm:block">
          <Link
            href="/proposals"
            className="flex items-center gap-2 px-4 py-2.5 bg-[#F22044] rounded-xl text-white text-sm font-semibold hover:bg-[#C41535] transition-all"
          >
            View Proposals
            <RiArrowRightLine className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {statCards.map(card => {
          const Icon = card.icon
          return (
            <div
              key={card.label}
              className={`bg-white rounded-2xl border ${card.border} p-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)]`}
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-[#718096]">{card.label}</p>
                <div className={`w-9 h-9 rounded-xl ${card.bg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${card.color}`} />
                </div>
              </div>
              <p className="text-3xl font-bold text-[#1A202C]">
                {loading ? <span className="inline-block w-8 h-8 bg-[#F0F2F8] rounded animate-pulse" /> : card.value}
              </p>
              <p className="text-xs text-[#A0AEC0] mt-1">proposals total</p>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Proposals */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#F0F2F8]">
            <div>
              <h2 className="text-sm font-bold text-[#1A202C]">Recent Proposals</h2>
              <p className="text-xs text-[#A0AEC0] mt-0.5">Your latest received proposals</p>
            </div>
            <Link
              href="/proposals"
              className="flex items-center gap-1.5 text-xs font-semibold text-[#F22044] hover:text-[#C41535] transition-colors"
            >
              View all
              <RiArrowRightLine className="w-3.5 h-3.5" />
            </Link>
          </div>

          {loading ? (
            <div className="divide-y divide-[#F0F2F8]">
              {[1,2,3].map(i => (
                <div key={i} className="flex items-center gap-4 px-5 py-4">
                  <div className="w-9 h-9 bg-[#F0F2F8] rounded-xl animate-pulse flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-[#F0F2F8] rounded animate-pulse w-2/3" />
                    <div className="h-2.5 bg-[#F0F2F8] rounded animate-pulse w-1/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : recentProposals.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-14 gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F0F2F8] flex items-center justify-center">
                <RiFileTextLine className="w-6 h-6 text-[#A0AEC0]" />
              </div>
              <p className="text-sm text-[#718096]">No proposals yet</p>
              <p className="text-xs text-[#A0AEC0]">Proposals sent to you will appear here</p>
            </div>
          ) : (
            <div className="divide-y divide-[#F0F2F8]">
              {recentProposals.map(p => (
                <Link
                  key={p.slug}
                  href={`/proposals/${p.slug}`}
                  className="flex items-center gap-4 px-5 py-4 hover:bg-[#FAFBFC] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#FFF0F3] flex items-center justify-center flex-shrink-0">
                    <RiFileTextLine className="w-4.5 h-4.5 text-[#F22044]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#1A202C] truncate group-hover:text-[#F22044] transition-colors">
                      {p.title}
                    </p>
                    <p className="text-xs text-[#A0AEC0] mt-0.5">{p.type} · {formatDate(p.dateCreated)}</p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <StatusBadge status={p.status} size="xs" />
                    <RiArrowRightLine className="w-4 h-4 text-[#CBD5E0] group-hover:text-[#F22044] transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Activity + Quick Nav */}
        <div className="space-y-4">
          {/* Activity History */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="px-4 py-3.5 border-b border-[#F0F2F8]">
              <h2 className="text-sm font-bold text-[#1A202C]">Activity History</h2>
            </div>

            {loading ? (
              <div className="px-4 py-3 space-y-3">
                {[1,2,3].map(i => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#F0F2F8] animate-pulse" />
                    <div className="flex-1 space-y-1.5">
                      <div className="h-2.5 bg-[#F0F2F8] rounded animate-pulse w-3/4" />
                      <div className="h-2 bg-[#F0F2F8] rounded animate-pulse w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            ) : activity.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 gap-2">
                <RiTimeLine className="w-7 h-7 text-[#E2E8F0]" />
                <p className="text-xs text-[#A0AEC0]">No recent activity</p>
              </div>
            ) : (
              <div className="px-4 py-3 space-y-3 max-h-64 overflow-y-auto scrollbar-thin">
                {activity.map(a => {
                  const config = ACTIVITY_ICONS[a.action] ?? { icon: RiTimeLine, color: 'text-gray-500', bg: 'bg-gray-50', label: a.action }
                  const Icon = config.icon
                  return (
                    <div key={a.activityId} className="flex items-start gap-3">
                      <div className={`w-7 h-7 rounded-lg ${config.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Icon className={`w-3.5 h-3.5 ${config.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-[#1A202C] leading-snug">{config.label}</p>
                        {a.metaData?.proposalTitle && (
                          <p className="text-xs text-[#A0AEC0] truncate mt-0.5">{a.metaData.proposalTitle}</p>
                        )}
                        <p className="text-[10px] text-[#CBD5E0] mt-0.5">{formatDateRelative(a.createdAt)}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Quick Navigation */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-4">
            <h2 className="text-sm font-bold text-[#1A202C] mb-3">Quick Navigation</h2>
            <div className="space-y-2">
              <Link
                href="/proposals"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#FFF0F3] group transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FFF0F3] flex items-center justify-center group-hover:bg-[#F22044] transition-colors">
                  <RiFileTextLine className="w-4 h-4 text-[#F22044] group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-[#1A202C]">Proposals Archive</p>
                  <p className="text-[10px] text-[#A0AEC0]">View all proposals</p>
                </div>
                <RiArrowRightLine className="w-3.5 h-3.5 text-[#CBD5E0] group-hover:text-[#F22044] transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
