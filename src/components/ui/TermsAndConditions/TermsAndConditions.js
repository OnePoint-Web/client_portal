import { RiFileTextLine, RiDownloadLine } from 'react-icons/ri'
import { termsAndConditionsContent } from '@/lib/termsAndConditionsContent'

function NestedList({ ordered, items }) {
  const Tag = ordered ? 'ol' : 'ul'
  return (
    <Tag className={`space-y-1.5 pl-5 mt-1.5 ${ordered ? 'list-decimal' : 'list-disc'}`}>
      {items.map((item, i) => {
        const isObject = typeof item === 'object'
        const text = isObject ? item.text : item
        return (
          <li key={i} className="text-[13px] leading-relaxed text-[#4A5568]">
            {text}
            {isObject && item.sublist && (
              <NestedList ordered={item.sublist.ordered} items={item.sublist.items} />
            )}
          </li>
        )
      })}
    </Tag>
  )
}

function Definitions({ items }) {
  return (
    <dl className="space-y-3 mt-2">
      {items.map((def, i) => (
        <div key={i}>
          <dt className="inline font-semibold text-[13px] text-[#1A202C]">{def.term}</dt>{' '}
          <dd className="inline text-[13px] leading-relaxed text-[#4A5568]">{def.text}</dd>
          {def.sublist && <NestedList ordered={def.sublist.ordered} items={def.sublist.items} />}
        </div>
      ))}
    </dl>
  )
}

function SectionBody({ body }) {
  return body.map((block, i) => {
    if (block.type === 'sub') {
      return (
        <p key={i} className="text-[13px] font-semibold text-[#1A202C] mt-4 mb-1">
          {block.text}
        </p>
      )
    }
    if (block.type === 'p') {
      return (
        <p key={i} className="text-[13px] leading-relaxed text-[#4A5568] mt-2">
          {block.text}
        </p>
      )
    }
    if (block.type === 'list') {
      return <NestedList key={i} ordered={block.ordered} items={block.items} />
    }
    if (block.type === 'definitions') {
      return <Definitions key={i} items={block.items} />
    }
    return null
  })
}

export default function TermsAndConditions() {
  return (
    <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),_0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="flex items-center justify-between gap-3 px-6 py-4 border-b border-[#F0F2F8] bg-gradient-to-r from-[#F8F9FC] to-white">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#1A1A2E] flex items-center justify-center flex-shrink-0">
            <RiFileTextLine className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="text-base font-bold text-[#1A202C]">Terms and Conditions</h2>
            <p className="text-xs text-[#A0AEC0]">NavMedia Pty Ltd trading as &ldquo;OnePoint&rdquo; (ABN 50 165 893 309)</p>
          </div>
        </div>
        <a
          href="/terms-and-conditions.pdf"
          download
          className="flex items-center gap-1.5 flex-shrink-0 text-xs font-semibold text-[#F22044] border border-[#F22044] rounded-lg px-3 py-2 hover:bg-[#FFF0F3] transition-colors"
        >
          <RiDownloadLine className="w-3.5 h-3.5" />
          Download PDF
        </a>
      </div>

      <div className="px-6 py-5 max-h-[600px] overflow-y-auto scrollbar-thin">
        <p className="text-[13px] leading-relaxed text-[#4A5568] mb-2">
          This Agreement, comprised of the accompanying Proposal and the Terms and Conditions below, governs the
          Services provided to you. By accepting the Proposal you agree to be bound by these Terms and Conditions.
        </p>
        {termsAndConditionsContent.map((section, i) => (
          <div key={i} className={i > 0 ? 'mt-6 pt-6 border-t border-[#F0F2F8]' : 'mt-4'}>
            <h3 className="text-sm font-bold text-[#1A202C]">{section.title}</h3>
            <SectionBody body={section.body} />
          </div>
        ))}
      </div>
    </div>
  )
}
