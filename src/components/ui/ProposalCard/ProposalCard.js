'use client'
import Link from 'next/link'
import { RiFileTextLine, RiCalendarLine, RiFilePdfLine, RiArrowRightLine } from 'react-icons/ri'
import StatusBadge from '@/components/ui/StatusBadge/StatusBadge'

function formatDate(dateStr) {
  if (!dateStr) return '—'
  return new Date(dateStr).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default function ProposalCard({ slug, title, type, status, dateCreated, statusUpdated }) {

  const proposal_url = process.env.NEXT_PUBLIC_PROPOSALS_DOMAIN
  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-0.5 flex flex-col">
      {/* Header */}
      <div className="p-5 pb-3">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-[#FFF0F3] flex items-center justify-center flex-shrink-0">
            <RiFileTextLine className="w-5 h-5 text-[#F22044]" />
          </div>
          <StatusBadge status={status} />
        </div>
        <h3 className="text-sm font-semibold text-[#1A202C] leading-snug line-clamp-2 mb-1">{title}</h3>
        <p className="text-xs text-[#A0AEC0] font-medium">{type}</p>
      </div>

      <hr className="border-[#F0F2F8] mx-5" />

      {/* Dates */}
      <div className="px-5 py-3 space-y-1.5">
        <div className="flex items-center gap-2 text-xs text-[#718096]">
          <RiCalendarLine className="w-3.5 h-3.5 text-[#A0AEC0]" />
          <span>Received: <span className="text-[#1A202C] font-medium">{formatDate(dateCreated)}</span></span>
        </div>
        {(status === 'Approved' || status === 'Declined') && (
          <div className="flex items-center gap-2 text-xs text-[#718096]">
            <RiCalendarLine className="w-3.5 h-3.5 text-[#A0AEC0]" />
            <span>{status}: <span className="text-[#1A202C] font-medium">{formatDate(statusUpdated)}</span></span>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="px-5 pb-5 mt-auto pt-3 flex gap-2">
        <button
          onClick={() => window.open(`${proposal_url}/api/proposals/${slug}/pdf`, '_blank')}
          className="flex items-center gap-1.5 px-3 py-2 border border-[#E2E8F0] rounded-xl text-xs font-medium text-[#718096] hover:border-[#F22044] hover:text-[#F22044] hover:bg-[#FFF0F3] transition-all"
        >
          <RiFilePdfLine className="w-3.5 h-3.5" />
          PDF
        </button>
        <Link
          href={`/proposals/${slug}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-[#1A1A2E] rounded-xl text-xs font-semibold text-white hover:bg-[#F22044] transition-all"
        >
          View Proposal
          <RiArrowRightLine className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  )
}
