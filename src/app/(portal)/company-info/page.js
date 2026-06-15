import { requireAuth } from '@/lib/auth'
import {
  RiBuildingLine,
  RiMapPinLine,
  RiMailLine,
  RiPhoneLine,
  RiGlobalLine,
  RiTimeLine,
  RiTeamLine,
  RiShieldCheckLine,
} from 'react-icons/ri'

export const metadata = { title: 'Company Information — OnePoint Client Portal' }

const SERVICES = [
  'Partnership Program',
  'Strategy Workshop',
  'Creative Design Services',
  'Web Design and Development',
  'Marketing Automation',
  'Property Marketing',
  'Merchandising',
  'Monthly Support Solutions',
]

const TEAM_STATS = [
  { label: 'Years in Business', value: '10+' },
  { label: 'Clients Served', value: '200+' },
  { label: 'Team Members', value: '50+' },
  { label: 'Projects Delivered', value: '500+' },
]

export default async function CompanyInfoPage() {
  await requireAuth()

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-xl font-bold text-[#1A202C]">Company Information</h1>
        <p className="text-sm text-[#718096] mt-1">Learn more about OnePoint and our services</p>
      </div>

      {/* Hero card */}
      <div className="bg-[#1A1A2E] rounded-2xl p-6 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#F22044] opacity-10" />
        <div className="absolute -bottom-16 right-32 w-32 h-32 rounded-full bg-[#F22044] opacity-6" />

        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          {/* <div className="w-16 h-16 rounded-2xl bg-[#F22044] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-2xl">1P</span>
          </div> */}
          <div>
            <h2 className="text-white font-bold text-2xl">OnePoint</h2>
            <p className="text-white/60 text-sm mt-1">Business Growth Agency</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {['Marketing', 'Brand Positioning', 'Revenue Growth'].map(tag => (
                <span key={tag} className="px-2.5 py-1 bg-white/10 rounded-lg text-white/70 text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact details */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-5">
            <h3 className="text-sm font-bold text-[#1A202C] mb-4">Contact Information</h3>
            <div className="space-y-3">
              {[
                { icon: RiMapPinLine, label: 'Address 1', value: 'Level 25, 100 Mount Street, North Sydney NSW 2060' },
                { icon: RiMapPinLine, label: 'Address 2', value: 'Unit 107 Doll Building, 6th Street, Bacolod City, Negross Occidental Philippines 6100' },
                { icon: RiMailLine, label: 'Email', value: 'info@1pt.com.au' },
                { icon: RiPhoneLine, label: 'Phone', value: '+61 2 8889 3780' },
                { icon: RiGlobalLine, label: 'Website', value: 'www.1pt.com.au' },
              ].map(item => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#FFF0F3] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-[#F22044]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#A0AEC0] font-medium">{item.label}</p>
                      <p className="text-sm text-[#1A202C] font-medium">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Business hours */}
          {/* <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-5">
            <div className="flex items-center gap-2 mb-4">
              <RiTimeLine className="w-4 h-4 text-[#F22044]" />
              <h3 className="text-sm font-bold text-[#1A202C]">Business Hours</h3>
            </div>
            <div className="space-y-2">
              {[
                { day: 'Mon – Fri', hours: '8:00 AM – 6:00 PM' },
                { day: 'Saturday', hours: '9:00 AM – 2:00 PM' },
                { day: 'Sunday', hours: 'Closed' },
              ].map(item => (
                <div key={item.day} className="flex items-center justify-between text-sm">
                  <span className="text-[#718096]">{item.day}</span>
                  <span className={`font-medium ${item.hours === 'Closed' ? 'text-red-400' : 'text-[#1A202C]'}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {/* About + Services */}
        <div className="lg:col-span-2 space-y-4">
          {/* About */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-5">
            <h3 className="text-sm font-bold text-[#1A202C] mb-3">About OnePoint</h3>
            <div className="space-y-3 text-sm text-[#718096] leading-relaxed">
              <p>
                OnePoint brings all your marketing needs together cohesively and economically. We offer a strategic approach based on your commercial goals and objectives. Our managed solutions and marketing services for small to medium sized Australian companies provide a bespoke solution tailored to your needs.
              </p>
              <p>
                We always look to forge long-term partnerships with our clients, organisations and institutions, delivering consistently high quality, integrated marketing and creative solutions.
              </p>
            </div>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {TEAM_STATS.map(stat => (
              <div key={stat.label} className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-4 text-center">
                <p className="text-2xl font-bold text-[#F22044]">{stat.value}</p>
                <p className="text-xs text-[#718096] mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div> */}

          {/* Services */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-5">
            <div className="flex items-center gap-2 mb-4">
              <RiShieldCheckLine className="w-4 h-4 text-[#F22044]" />
              <h3 className="text-sm font-bold text-[#1A202C]">Our Services</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {SERVICES.map(service => (
                <div key={service} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F8F9FC] border border-[#E2E8F0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F22044] flex-shrink-0" />
                  <span className="text-xs text-[#718096] font-medium leading-snug">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-5">
            <div className="flex items-center gap-2 mb-4">
              <RiTeamLine className="w-4 h-4 text-[#F22044]" />
              <h3 className="text-sm font-bold text-[#1A202C]">Our Values</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { title: 'Innovation', desc: 'We stay at the forefront of technology to deliver cutting-edge solutions.' },
                { title: 'Integrity', desc: 'Transparency and honesty in every interaction and deliverable.' },
                { title: 'Partnership', desc: 'Your success is our success — we grow together.' },
              ].map(val => (
                <div key={val.title} className="p-4 rounded-xl bg-[#F8F9FC] border border-[#E2E8F0]">
                  <div className="w-7 h-7 rounded-lg bg-[#F22044] flex items-center justify-center mb-2.5">
                    <RiShieldCheckLine className="w-3.5 h-3.5 text-white" />
                  </div>
                  <p className="text-sm font-bold text-[#1A202C] mb-1">{val.title}</p>
                  <p className="text-xs text-[#718096] leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
