'use client'
import { useState } from 'react'
import { METHODOLOGY_STEPS } from '@/lib/methodologyContent'

export default function OurMethodology() {
  const [activeStep, setActiveStep] = useState(METHODOLOGY_STEPS[0].number)
  const active = METHODOLOGY_STEPS.find(s => s.number === activeStep)

  return (
    <div className="px-6 py-6">
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-6">
        {METHODOLOGY_STEPS.map(step => {
          const isActive = activeStep === step.number
          return (
            <button
              key={step.number}
              type="button"
              onClick={() => setActiveStep(step.number)}
              className="flex flex-col items-center gap-2 group"
            >
              <span
                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-black text-white transition-all ${
                  isActive ? 'bg-[#F22044] ring-4 ring-[#F22044]/20 scale-105' : 'bg-[#1A1A2E] group-hover:bg-[#F22044]'
                }`}
              >
                {step.number}
              </span>
              <span className={`text-[11px] font-bold uppercase tracking-wide text-center ${isActive ? 'text-[#F22044]' : 'text-[#718096]'}`}>
                {step.label}
              </span>
            </button>
          )
        })}
      </div>

      {active && (
        <div className="p-4 bg-[#F8F9FC] rounded-xl border border-[#E2E8F0]">
          <p className="text-sm font-bold text-[#1A202C] mb-3">{active.number}. {active.label}</p>
          <ul className="space-y-1.5">
            {active.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#718096]">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F22044] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
