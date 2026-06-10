'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import DOMPurify from 'isomorphic-dompurify'
import {
  RiFileTextLine,
  RiVideoLine,
  RiFocus3Line,
  RiLightbulbLine,
  RiTeamLine,
  RiTimelineView,
  RiMoneyDollarCircleLine,
  RiCheckboxCircleLine,
  RiCalendarLine,
  RiBuildingLine,
  RiMailLine,
  RiGlobalLine,
  RiEyeLine,
  RiLockLine,
} from 'react-icons/ri'
import StatusBadge from '@/components/ui/StatusBadge/StatusBadge'
import MemberCard from '@/components/ui/MemberCard/MemberCard'

const SECTIONS = [
  { id: 'executive-summary', label: 'Summary', icon: RiFileTextLine },
  { id: 'goals', label: 'Goals', icon: RiFocus3Line },
  { id: 'solution', label: 'Solution', icon: RiLightbulbLine },
  { id: 'team', label: 'Team', icon: RiTeamLine },
  { id: 'timeline', label: 'Timeline', icon: RiTimelineView },
  { id: 'budget', label: 'Budget', icon: RiMoneyDollarCircleLine },
  { id: 'overview', label: 'Overview', icon: RiCheckboxCircleLine },
]

function formatDate(d) {
  if (!d) return '—'
  return new Date(d).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}

function formatCurrency(val) {
  const n = parseFloat(val ?? 0)
  return `$${n.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

function calculateItemDiscounts(entries) {
  return entries.reduce((sum, item) => {
    if (item.itemDiscountType === 'Percentage') return sum + item.totalPrice * (item.itemDiscountValue / 100)
    if (item.itemDiscountType === 'Fixed') return sum + Number(item.itemDiscountValue)
    return sum
  }, 0)
}

export default function ViewPageClient({ token }) {
  const [proposal, setProposal] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeSection, setActiveSection] = useState('executive-summary')
  const sectionRefs = useRef({})
  const sessionRef = useRef(null)

  // Fetch proposal data
  useEffect(() => {
    fetch(`/api/view/${token}`)
      .then(r => {
        if (r.status === 404) throw new Error('This proposal link was not found.')
        if (r.status === 410) throw new Error('This proposal link has expired.')
        if (!r.ok) throw new Error('Failed to load proposal.')
        return r.json()
      })
      .then(data => setProposal(data.proposal))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [token])

  // Session lifecycle — start after proposal loads, heartbeat every 30s, end on unload
  useEffect(() => {
    if (!proposal) return

    fetch(`/api/view/${token}/session`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'start' }),
    })
      .then(r => r.json())
      .then(data => { sessionRef.current = data.sessionId })
      .catch(() => {})

    const heartbeat = setInterval(() => {
      if (!sessionRef.current) return
      fetch(`/api/view/${token}/session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'heartbeat', sessionId: sessionRef.current }),
      }).catch(() => {})
    }, 30000)

    const endSession = () => {
      if (!sessionRef.current) return
      navigator.sendBeacon(
        `/api/view/${token}/session`,
        new Blob(
          [JSON.stringify({ action: 'end', sessionId: sessionRef.current })],
          { type: 'application/json' }
        )
      )
    }

    window.addEventListener('beforeunload', endSession)
    window.addEventListener('pagehide', endSession)

    return () => {
      clearInterval(heartbeat)
      window.removeEventListener('beforeunload', endSession)
      window.removeEventListener('pagehide', endSession)
      // End on SPA unmount
      if (sessionRef.current) {
        fetch(`/api/view/${token}/session`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'end', sessionId: sessionRef.current }),
        }).catch(() => {})
      }
    }
  }, [proposal, token])

  // Section highlight on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) {
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          )
          setActiveSection(top.target.id)
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    )
    Object.values(sectionRefs.current).forEach(el => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [proposal])

  function scrollTo(id) {
    const el = sectionRefs.current[id]
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 130
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  // Loading skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F9FC] flex flex-col">
        <div className="bg-white border-b border-[#E2E8F0] h-16" />
        <div className="max-w-4xl mx-auto w-full px-4 py-8 space-y-4 animate-pulse">
          <div className="h-10 bg-white rounded-2xl w-64" />
          <div className="h-24 bg-white rounded-2xl" />
          <div className="h-96 bg-white rounded-2xl" />
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-[#F8F9FC] flex flex-col items-center justify-center gap-5 px-4">
        <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center">
          <RiLockLine className="w-8 h-8 text-red-400" />
        </div>
        <div className="text-center">
          <p className="text-base font-semibold text-[#1A202C]">{error}</p>
          <p className="text-sm text-[#718096] mt-2">
            Please contact your OnePoint account manager for assistance.
          </p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-6 h-6 bg-[#F22044] rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-xs">1P</span>
          </div>
          <span className="text-sm font-semibold text-[#1A1A2E]">OnePoint</span>
        </div>
      </div>
    )
  }

  if (!proposal) return null

  const status = proposal.proposalStatus?.status ?? 'Sent'
  const isSla = proposal.proposalType === 'SLA Proposal'
  const slaOffer = proposal.slaOffers?.[0]
  const serviceOffer = proposal.serviceProductOffers?.[0]
  const timelines = proposal.timelines ?? []

  const sections = SECTIONS.filter(s => {
    if (s.id === 'budget') return isSla ? !!slaOffer : !!serviceOffer
    if (s.id === 'timeline') return timelines.length > 0
    return true
  })

  return (
    <div className="min-h-screen bg-[#F8F9FC] flex flex-col">

      {/* Minimal branded header */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#F22044] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">1P</span>
            </div>
            <span className="text-[#1A1A2E] font-bold text-base tracking-wide">OnePoint</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F8F9FC] rounded-xl border border-[#E2E8F0]">
            <RiEyeLine className="w-3.5 h-3.5 text-[#A0AEC0]" />
            <span className="text-xs text-[#718096] font-medium">Read-only view</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto w-full px-4 py-6">

        {/* Proposal meta header */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-5 mb-5">
          <div className="flex items-center gap-3 mb-2">
            <StatusBadge status={status} />
            <span className="text-xs text-[#A0AEC0] font-medium">{proposal.proposalType}</span>
          </div>
          <h1 className="text-xl font-bold text-[#1A202C] leading-tight">{proposal.proposalTitle}</h1>
          <div className="flex items-center gap-2 mt-2">
            <RiCalendarLine className="w-3.5 h-3.5 text-[#A0AEC0]" />
            <span className="text-xs text-[#A0AEC0]">Received {formatDate(proposal.dateCreated)}</span>
          </div>
        </div>

        {/* Sticky section nav */}
        <div className="sticky top-16 z-40 bg-[#F8F9FC] pt-2 pb-2 -mx-4 px-4 mb-6 border-b border-[#E2E8F0]">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-thin pb-1">
            {sections.map(section => {
              const Icon = section.icon
              const active = activeSection === section.id
              return (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                    active
                      ? 'bg-[#F22044] text-white shadow-sm'
                      : 'text-[#718096] hover:bg-white hover:text-[#1A202C] hover:shadow-sm'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {section.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">

          {/* Executive Summary */}
          <section
            id="executive-summary"
            ref={el => { sectionRefs.current['executive-summary'] = el }}
            className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden"
          >
            <div className="flex items-center gap-3 px-6 py-4 border-b border-[#F0F2F8] bg-gradient-to-r from-[#FFF0F3] to-white">
              <div className="w-8 h-8 rounded-xl bg-[#F22044] flex items-center justify-center">
                <RiFileTextLine className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-base font-bold text-[#1A202C]">Executive Summary</h2>
            </div>

            {proposal.execVideoUrl && (
              <div className="px-6 pt-5">
                <div className="aspect-video rounded-xl overflow-hidden bg-[#1A1A2E]">
                  <iframe
                    src={proposal.execVideoUrl.replace('watch?v=', 'embed/')}
                    className="w-full h-full"
                    allowFullScreen
                    title="Executive Video"
                  />
                </div>
                <div className="flex items-center gap-2 mt-2 mb-2">
                  <RiVideoLine className="w-3.5 h-3.5 text-[#A0AEC0]" />
                  <p className="text-xs text-[#A0AEC0]">Executive video presentation</p>
                </div>
              </div>
            )}

            <div
              className="rich-text px-6 py-5 text-sm text-[#1A202C] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(proposal.executiveSummary ?? '') }}
            />
          </section>

          {/* Goals and Objectives */}
          <section
            id="goals"
            ref={el => { sectionRefs.current['goals'] = el }}
            className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden"
          >
            <div className="flex items-center gap-3 px-6 py-4 border-b border-[#F0F2F8] bg-gradient-to-r from-blue-50 to-white">
              <div className="w-8 h-8 rounded-xl bg-blue-500 flex items-center justify-center">
                <RiFocus3Line className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-base font-bold text-[#1A202C]">Goals and Objectives</h2>
            </div>
            <div
              className="rich-text px-6 py-5 text-sm text-[#1A202C] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(proposal.goalsAndObjectives ?? '') }}
            />
          </section>

          {/* Proposed Solution */}
          <section
            id="solution"
            ref={el => { sectionRefs.current['solution'] = el }}
            className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden"
          >
            <div className="flex items-center gap-3 px-6 py-4 border-b border-[#F0F2F8] bg-gradient-to-r from-amber-50 to-white">
              <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center">
                <RiLightbulbLine className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-base font-bold text-[#1A202C]">Proposed Solution</h2>
            </div>
            <div
              className="rich-text px-6 py-5 text-sm text-[#1A202C] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(proposal.proposedSolution ?? '') }}
            />
          </section>

          {/* The Team */}
          <section
            id="team"
            ref={el => { sectionRefs.current['team'] = el }}
            className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden"
          >
            <div className="flex items-center gap-3 px-6 py-4 border-b border-[#F0F2F8] bg-gradient-to-r from-green-50 to-white">
              <div className="w-8 h-8 rounded-xl bg-green-500 flex items-center justify-center">
                <RiTeamLine className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-base font-bold text-[#1A202C]">The Team</h2>
            </div>
            {!proposal.selectedMembers?.length ? (
              <div className="px-6 py-8 text-center text-sm text-[#A0AEC0]">No team members listed.</div>
            ) : (
              <div className="px-6 py-5">
                <div className="flex flex-wrap gap-4">
                  {proposal.selectedMembers.map((m, i) => (
                    <MemberCard
                      key={i}
                      name={m.teamMember.memberName}
                      role={m.teamMember.memberRole}
                      image={m.teamMember.memberImage}
                      description={m.teamMember.description}
                    />
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Project Timeline */}
          {timelines.length > 0 && (
            <section
              id="timeline"
              ref={el => { sectionRefs.current['timeline'] = el }}
              className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden"
            >
              <div className="flex items-center gap-3 px-6 py-4 border-b border-[#F0F2F8] bg-gradient-to-r from-indigo-50 to-white">
                <div className="w-8 h-8 rounded-xl bg-indigo-500 flex items-center justify-center">
                  <RiTimelineView className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-base font-bold text-[#1A202C]">Project Timeline</h2>
              </div>
              <div className="px-6 py-5 overflow-x-auto">
                <table className="w-full text-sm min-w-[560px]">
                  <thead>
                    <tr className="border-b border-[#F0F2F8]">
                      <th className="text-left pb-3 pr-4 text-xs font-semibold text-[#A0AEC0] uppercase tracking-wide w-36">Timeframe</th>
                      <th className="text-left pb-3 pr-4 text-xs font-semibold text-[#A0AEC0] uppercase tracking-wide w-36">Assigned To</th>
                      <th className="text-left pb-3 pr-4 text-xs font-semibold text-[#A0AEC0] uppercase tracking-wide w-48">Progress</th>
                      <th className="text-left pb-3 text-xs font-semibold text-[#A0AEC0] uppercase tracking-wide">Tasks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0F2F8]">
                    {timelines.slice().sort((a, b) => a.progress - b.progress).map(t => (
                      <tr key={t.timelineId} className="hover:bg-[#FAFBFC] transition-colors">
                        <td className="py-4 pr-4 align-top font-medium text-[#1A202C]">{t.timeFrame}</td>
                        <td className="py-4 pr-4 align-top text-[#718096]">{t.assignedTo || '—'}</td>
                        <td className="py-4 pr-4 align-top">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-2 bg-[#F0F2F8] rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full transition-all"
                                style={{
                                  width: `${t.progress}%`,
                                  background: t.progress === 100 ? '#22C55E' : t.progress >= 60 ? '#6366F1' : t.progress >= 30 ? '#F59E0B' : '#E2E8F0',
                                }}
                              />
                            </div>
                            <span className="text-xs font-semibold text-[#718096] w-9 text-right flex-shrink-0">{t.progress}%</span>
                          </div>
                        </td>
                        <td className="py-4 align-top">
                          {t.timelineScopeItems?.length > 0 ? (
                            <ul className="space-y-1">
                              {t.timelineScopeItems.map(s => (
                                <li key={s.scopeItemId} className="flex items-start gap-2 text-[#718096]">
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                                  {s.scope}
                                </li>
                              ))}
                            </ul>
                          ) : <span className="text-[#A0AEC0]">—</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Budget */}
          {(isSla ? slaOffer : serviceOffer) && (
            <section
              id="budget"
              ref={el => { sectionRefs.current['budget'] = el }}
              className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden"
            >
              <div className="flex items-center gap-3 px-6 py-4 border-b border-[#F0F2F8] bg-gradient-to-r from-purple-50 to-white">
                <div className="w-8 h-8 rounded-xl bg-purple-500 flex items-center justify-center">
                  <RiMoneyDollarCircleLine className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-base font-bold text-[#1A202C]">Proposed Budget</h2>
              </div>

              <div className="px-6 py-5 space-y-5">
                {isSla && slaOffer && (
                  <>
                    <div>
                      <p className="text-sm font-semibold text-[#1A202C] mb-1">
                        Package: <span className="text-[#F22044]">{slaOffer.slaPackage}</span>
                      </p>
                      <p className="text-xs text-[#718096] mb-4">Inclusions may include the following items:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {slaOffer.packageDealItem?.map(item => (
                          <div key={item.packageDealItemId} className={`rounded-xl border border-[#E2E8F0] p-4 ${item.itemType === 'Paragraph' ? 'sm:col-span-2' : ''}`}>
                            <p className="text-xs font-bold text-[#1A202C] uppercase tracking-wide mb-2">{item.item}</p>
                            {item.itemType === 'Paragraph' ? (
                              <p className="text-sm text-[#718096] leading-relaxed">{item.packageDealEntries[0]?.itemEntry}</p>
                            ) : (
                              <ul className="space-y-1">
                                {item.packageDealEntries.map(e => (
                                  <li key={e.itemEntryId} className="flex items-start gap-2 text-sm text-[#718096]">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F22044] flex-shrink-0" />
                                    {e.itemEntry}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                      {proposal.proposalDescription && (
                        <div className="mt-4 p-4 bg-[#F8F9FC] rounded-xl border border-[#E2E8F0]">
                          <p className="text-sm text-[#718096] leading-relaxed">{proposal.proposalDescription}</p>
                        </div>
                      )}
                    </div>
                    <PriceSummaryTable
                      rows={[
                        { label: 'Package Price', value: formatCurrency(slaOffer.basePrice) },
                        slaOffer.discountType !== 'None' && { label: 'Discount', value: `- ${formatCurrency(slaOffer.discountValue)}`, muted: true },
                        slaOffer.taxApplicable && { label: `GST (${slaOffer.taxRate}%)`, value: `+ ${formatCurrency(slaOffer.taxAmount)}`, muted: true },
                      ].filter(Boolean)}
                      total={formatCurrency(slaOffer.finalPrice)}
                      paymentTerms={slaOffer.paymentTerms}
                    />
                  </>
                )}

                {!isSla && serviceOffer && (
                  <>
                    <div className="overflow-x-auto rounded-xl border border-[#E2E8F0]">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-[#F8F9FC] border-b border-[#E2E8F0]">
                            <th className="text-left px-4 py-3 text-xs font-semibold text-[#718096] uppercase tracking-wide">Item</th>
                            <th className="text-left px-4 py-3 text-xs font-semibold text-[#718096] uppercase tracking-wide">Description</th>
                            <th className="text-right px-4 py-3 text-xs font-semibold text-[#718096] uppercase tracking-wide">Price</th>
                            {proposal.proposalType === 'Product Proposal' && (
                              <>
                                <th className="text-right px-4 py-3 text-xs font-semibold text-[#718096] uppercase tracking-wide">Qty</th>
                                <th className="text-right px-4 py-3 text-xs font-semibold text-[#718096] uppercase tracking-wide">Subtotal</th>
                              </>
                            )}
                            <th className="text-right px-4 py-3 text-xs font-semibold text-[#718096] uppercase tracking-wide">Discount</th>
                            <th className="text-right px-4 py-3 text-xs font-semibold text-[#718096] uppercase tracking-wide">Total</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#F0F2F8]">
                          {serviceOffer.offerEntries?.map(entry => {
                            const discountedTotal = entry.itemDiscountType === 'Fixed'
                              ? entry.totalPrice - entry.itemDiscountValue
                              : entry.itemDiscountType === 'Percentage'
                                ? entry.totalPrice - ((entry.itemDiscountValue / 100) * entry.totalPrice)
                                : entry.totalPrice
                            return (
                              <tr key={entry.offerEntryId} className="hover:bg-[#FAFBFC]">
                                <td className="px-4 py-3 font-medium text-[#1A202C]">{entry.serviceProductItem}</td>
                                <td className="px-4 py-3 text-[#718096] text-xs max-w-48">{entry.description ?? '—'}</td>
                                <td className="px-4 py-3 text-right text-[#1A202C]">{formatCurrency(entry.itemPrice)}</td>
                                {proposal.proposalType === 'Product Proposal' && (
                                  <>
                                    <td className="px-4 py-3 text-right text-[#1A202C]">{entry.quantity}</td>
                                    <td className="px-4 py-3 text-right text-[#1A202C]">{formatCurrency(entry.totalPrice)}</td>
                                  </>
                                )}
                                <td className="px-4 py-3 text-right">
                                  {entry.itemDiscountType === 'None' || !entry.itemDiscountType ? (
                                    <span className="text-[#A0AEC0]">—</span>
                                  ) : (
                                    <span className="text-red-500 text-xs">
                                      {entry.itemDiscountType === 'Fixed' ? `- ${formatCurrency(entry.itemDiscountValue)}` : `- ${entry.itemDiscountValue}%`}
                                    </span>
                                  )}
                                </td>
                                <td className="px-4 py-3 text-right font-semibold text-[#1A202C]">{formatCurrency(discountedTotal)}</td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                    <PriceSummaryTable
                      rows={[
                        { label: 'Subtotal', value: formatCurrency(serviceOffer.subTotal) },
                        calculateItemDiscounts(serviceOffer.offerEntries ?? []) > 0 && {
                          label: 'Item Discounts',
                          value: `- ${formatCurrency(calculateItemDiscounts(serviceOffer.offerEntries))}`,
                          muted: true,
                        },
                        serviceOffer.discountType !== 'None' && {
                          label: `Global Discount${serviceOffer.discountDescription ? ` (${serviceOffer.discountDescription})` : ''}`,
                          value: serviceOffer.discountType === 'Fixed'
                            ? `- ${formatCurrency(serviceOffer.discountValue)}`
                            : `- ${formatCurrency((serviceOffer.discountValue / 100) * (serviceOffer.subTotal - calculateItemDiscounts(serviceOffer.offerEntries ?? [])))}`,
                          muted: true,
                        },
                        serviceOffer.taxApplicable && {
                          label: `GST (${serviceOffer.taxRate}%)`,
                          value: `+ ${formatCurrency(serviceOffer.taxAmount)}`,
                          muted: true,
                        },
                      ].filter(Boolean)}
                      total={formatCurrency(serviceOffer.finalPrice)}
                      paymentTerms={serviceOffer.paymentTerms}
                    />
                  </>
                )}
              </div>
            </section>
          )}

          {/* Proposal Overview — read-only, no approve/decline */}
          <section
            id="overview"
            ref={el => { sectionRefs.current['overview'] = el }}
            className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden"
          >
            <div className="flex items-center gap-3 px-6 py-4 border-b border-[#F0F2F8] bg-gradient-to-r from-[#FFF0F3] to-white">
              <div className="w-8 h-8 rounded-xl bg-[#F22044] flex items-center justify-center">
                <RiCheckboxCircleLine className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-base font-bold text-[#1A202C]">Proposal Overview</h2>
            </div>

            <div className="px-6 py-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#F8F9FC] rounded-xl border border-[#E2E8F0] space-y-2.5">
                  <p className="text-xs font-bold text-[#A0AEC0] uppercase tracking-wide">Proposal Details</p>
                  <div>
                    <p className="text-xs text-[#A0AEC0]">Title</p>
                    <p className="text-sm font-semibold text-[#1A202C]">{proposal.proposalTitle}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#A0AEC0]">Type</p>
                    <p className="text-sm font-semibold text-[#1A202C]">{proposal.proposalType}</p>
                  </div>
                  {isSla && slaOffer && (
                    <div>
                      <p className="text-xs text-[#A0AEC0]">Package</p>
                      <p className="text-sm font-semibold text-[#1A202C]">{slaOffer.slaPackage}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-xs text-[#A0AEC0]">Status</p>
                    <div className="mt-1"><StatusBadge status={status} /></div>
                  </div>
                </div>

                <div className="p-4 bg-[#F8F9FC] rounded-xl border border-[#E2E8F0] space-y-2.5">
                  <p className="text-xs font-bold text-[#A0AEC0] uppercase tracking-wide">Client Details</p>
                  <div className="flex items-start gap-2">
                    <RiBuildingLine className="w-3.5 h-3.5 text-[#A0AEC0] mt-0.5" />
                    <div>
                      <p className="text-xs text-[#A0AEC0]">Company</p>
                      <p className="text-sm font-semibold text-[#1A202C]">{proposal.clientProfile?.companyName ?? '—'}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <RiFileTextLine className="w-3.5 h-3.5 text-[#A0AEC0] mt-0.5" />
                    <div>
                      <p className="text-xs text-[#A0AEC0]">Client</p>
                      <p className="text-sm font-semibold text-[#1A202C]">
                        {proposal.clientProfile?.user?.firstName} {proposal.clientProfile?.user?.lastName}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <RiMailLine className="w-3.5 h-3.5 text-[#A0AEC0] mt-0.5" />
                    <div>
                      <p className="text-xs text-[#A0AEC0]">Email</p>
                      <p className="text-sm font-semibold text-[#1A202C]">{proposal.clientProfile?.user?.userEmail ?? '—'}</p>
                    </div>
                  </div>
                  {proposal.clientProfile?.website && (
                    <div className="flex items-start gap-2">
                      <RiGlobalLine className="w-3.5 h-3.5 text-[#A0AEC0] mt-0.5" />
                      <div>
                        <p className="text-xs text-[#A0AEC0]">Website</p>
                        <p className="text-sm font-semibold text-[#1A202C]">{proposal.clientProfile.website}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Read-only notice — portal users directed to login */}
              <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <RiLockLine className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-blue-700">Read-only view</p>
                  <p className="text-xs text-blue-600 mt-0.5">
                    To approve or decline this proposal, please{' '}
                    <Link href="/login" className="underline font-semibold hover:text-blue-800">
                      sign in to your client portal
                    </Link>.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-10 pb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="w-5 h-5 bg-[#F22044] rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-[10px]">1P</span>
            </div>
            <span className="text-xs font-semibold text-[#1A1A2E]">OnePoint</span>
          </div>
          <p className="text-xs text-[#A0AEC0]">
            This proposal was prepared exclusively for you. Please do not share this link.
          </p>
        </div>

      </div>
    </div>
  )
}

function PriceSummaryTable({ rows, total, paymentTerms }) {
  return (
    <div className="space-y-3">
      <div className="border border-[#E2E8F0] rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-[#F0F2F8] last:border-0">
                <td className={`px-4 py-3 ${row.muted ? 'text-[#718096]' : 'font-medium text-[#1A202C]'}`}>{row.label}</td>
                <td className={`px-4 py-3 text-right font-semibold ${row.muted ? 'text-[#718096]' : 'text-[#1A202C]'}`}>{row.value}</td>
              </tr>
            ))}
            <tr className="bg-[#1A1A2E]">
              <td className="px-4 py-4 font-bold text-white">Total</td>
              <td className="px-4 py-4 text-right font-bold text-white text-base">{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {paymentTerms && (
        <div className="p-4 bg-[#F8F9FC] rounded-xl border border-[#E2E8F0]">
          <p className="text-xs font-bold text-[#A0AEC0] uppercase tracking-wide mb-1.5">Payment Terms</p>
          <div
            className="rich-text text-sm text-[#718096] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(paymentTerms) }}
          />
        </div>
      )}
    </div>
  )
}
