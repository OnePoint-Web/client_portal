'use client'
import { useState, useEffect, useCallback } from 'react'
import { RiSearchLine, RiFilterLine, RiFileTextLine, RiInboxLine } from 'react-icons/ri'
import ProposalCard from '@/components/ui/ProposalCard/ProposalCard'

const STATUS_OPTIONS = [
  { value: '', label: 'All Statuses' },
  { value: 'Published', label: 'Received' },
  { value: 'Viewed', label: 'Viewed' },
  { value: 'Pending', label: 'Pending' },
  { value: 'Approved', label: 'Approved' },
  { value: 'Declined', label: 'Declined' },
]

const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'alpha_asc', label: 'A → Z' },
  { value: 'alpha_desc', label: 'Z → A' },
]

export default function ProposalsArchiveClient() {
  const [proposals, setProposals] = useState([])
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('')
  const [sort, setSort] = useState('newest')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [debouncedSearch, setDebouncedSearch] = useState('')

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search), 350)
    return () => clearTimeout(t)
  }, [search])

  const fetchProposals = useCallback(() => {
    setLoading(true)
    const params = new URLSearchParams({
      search: debouncedSearch,
      status,
      sort,
      page: String(page),
      limit: '9',
    })
    fetch(`/api/proposals?${params}`)
      .then(r => r.json())
      .then(data => {
        setProposals(data.proposals ?? [])
        setTotalPages(data.totalPages ?? 1)
        setTotal(data.total ?? 0)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [debouncedSearch, status, sort, page])

  useEffect(() => {
    fetchProposals()
  }, [fetchProposals])

  useEffect(() => {
    setPage(1)
  }, [debouncedSearch, status, sort])

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-xl font-bold text-[#1A202C]">Proposals Archive</h1>
        <p className="text-sm text-[#718096] mt-1">All proposals submitted to your account</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <RiSearchLine className="w-4 h-4 text-[#A0AEC0]" />
            </div>
            <input
              type="text"
              placeholder="Search proposals..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-[#F8F9FC] border border-[#E2E8F0] rounded-xl text-sm text-[#1A202C] placeholder-[#A0AEC0] focus:outline-none focus:ring-2 focus:ring-[#F22044]/20 focus:border-[#F22044] transition-all"
            />
          </div>

          {/* Status filter */}
          <div className="relative">
            <select
              value={status}
              onChange={e => setStatus(e.target.value)}
              className="appearance-none pl-9 pr-8 py-2.5 bg-[#F8F9FC] border border-[#E2E8F0] rounded-xl text-sm text-[#1A202C] focus:outline-none focus:ring-2 focus:ring-[#F22044]/20 focus:border-[#F22044] transition-all cursor-pointer"
            >
              {STATUS_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <RiFilterLine className="w-4 h-4 text-[#A0AEC0]" />
            </div>
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="appearance-none px-4 py-2.5 bg-[#F8F9FC] border border-[#E2E8F0] rounded-xl text-sm text-[#1A202C] focus:outline-none focus:ring-2 focus:ring-[#F22044]/20 focus:border-[#F22044] transition-all cursor-pointer"
          >
            {SORT_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {total > 0 && (
          <p className="text-xs text-[#A0AEC0] mt-3">
            Showing {proposals.length} of {total} proposal{total !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="bg-white rounded-2xl border border-[#E2E8F0] p-5 space-y-3 animate-pulse">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 bg-[#F0F2F8] rounded-xl" />
                <div className="w-16 h-5 bg-[#F0F2F8] rounded-full" />
              </div>
              <div className="space-y-2 pt-2">
                <div className="h-3 bg-[#F0F2F8] rounded w-4/5" />
                <div className="h-2.5 bg-[#F0F2F8] rounded w-1/3" />
              </div>
              <div className="h-px bg-[#F0F2F8]" />
              <div className="h-2.5 bg-[#F0F2F8] rounded w-1/2" />
              <div className="flex gap-2 pt-1">
                <div className="h-8 bg-[#F0F2F8] rounded-xl w-16" />
                <div className="h-8 bg-[#F0F2F8] rounded-xl flex-1" />
              </div>
            </div>
          ))}
        </div>
      ) : proposals.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <div className="w-16 h-16 rounded-2xl bg-[#F0F2F8] flex items-center justify-center">
            <RiInboxLine className="w-8 h-8 text-[#A0AEC0]" />
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-[#1A202C]">No proposals found</p>
            <p className="text-xs text-[#A0AEC0] mt-1">
              {search || status ? 'Try adjusting your filters' : 'Proposals sent to you will appear here'}
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {proposals.map(p => (
            <ProposalCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              type={p.type}
              status={p.status}
              dateCreated={p.dateCreated}
              statusUpdated={p.statusUpdated}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-white border border-[#E2E8F0] rounded-xl text-sm font-medium text-[#718096] disabled:opacity-40 hover:border-[#F22044] hover:text-[#F22044] transition-all"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
            .reduce((acc, p, idx, arr) => {
              if (idx > 0 && p - arr[idx - 1] > 1) acc.push('...')
              acc.push(p)
              return acc
            }, [])
            .map((p, i) =>
              p === '...' ? (
                <span key={`ellipsis-${i}`} className="px-2 text-[#A0AEC0] text-sm">…</span>
              ) : (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-9 h-9 rounded-xl text-sm font-semibold transition-all ${
                    page === p
                      ? 'bg-[#F22044] text-white shadow-sm'
                      : 'bg-white border border-[#E2E8F0] text-[#718096] hover:border-[#F22044] hover:text-[#F22044]'
                  }`}
                >
                  {p}
                </button>
              )
            )}

          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-white border border-[#E2E8F0] rounded-xl text-sm font-medium text-[#718096] disabled:opacity-40 hover:border-[#F22044] hover:text-[#F22044] transition-all"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}
