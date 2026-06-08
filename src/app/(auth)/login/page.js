'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { RiEyeLine, RiEyeOffLine, RiLockLine, RiUserLine } from 'react-icons/ri'

export default function LoginPage() {
  const router = useRouter()
  const { setUser } = useAuth()
  const [form, setForm] = useState({ username: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Login failed')
        return
      }

      setUser(data.user)
      router.push('/dashboard')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex bg-[#F8F9FC]">
      {/* Left branding panel */}
      <div className="hidden lg:flex lg:w-[45%] bg-[#1A1A2E] flex-col justify-between p-12 relative overflow-hidden">
        {/* Red accent */}
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#F22044] opacity-10" />
        <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-[#F22044] opacity-8" />

        {/* Logo */}
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-10 h-10 bg-[#F22044] rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">1P</span>
          </div>
          <span className="text-white font-bold text-xl tracking-wide">OnePoint</span>
        </div>

        {/* Hero text */}
        <div className="relative z-10">
          <h1 className="text-white font-bold text-4xl leading-tight mb-4">
            Welcome to your<br />
            <span className="text-[#F22044]">Client Portal</span>
          </h1>
          <p className="text-white/60 text-base leading-relaxed max-w-sm">
            Access your proposals, track project progress, and collaborate with the OnePoint team — all in one place.
          </p>

          <div className="mt-10 space-y-4">
            {[
              { label: 'View Proposals', desc: 'Review all proposals sent to you' },
              { label: 'Track Progress', desc: 'Stay updated on project timelines' },
              { label: 'Approve & Decline', desc: 'Make decisions directly in the portal' },
            ].map(item => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-[#F22044] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                  <p className="text-white/50 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-white/30 text-xs relative z-10">
          © {new Date().getFullYear()} OnePoint. All rights reserved.
        </p>
      </div>

      {/* Right login panel */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex lg:hidden items-center gap-3 mb-8">
            <div className="w-9 h-9 bg-[#F22044] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">1P</span>
            </div>
            <span className="text-[#1A1A2E] font-bold text-lg">OnePoint</span>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.07),_0_8px_24px_rgba(0,0,0,0.06)] p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#1A202C] mb-1">Sign in to your account</h2>
              <p className="text-[#718096] text-sm">Enter your credentials to access your portal</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Username */}
              <div>
                <label className="block text-sm font-semibold text-[#1A202C] mb-2">Username</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <RiUserLine className="text-[#A0AEC0] w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={form.username}
                    onChange={e => setForm(f => ({ ...f, username: e.target.value }))}
                    placeholder="Enter your username"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-[#F8F9FC] border border-[#E2E8F0] rounded-xl text-sm text-[#1A202C] placeholder-[#A0AEC0] focus:outline-none focus:ring-2 focus:ring-[#F22044]/30 focus:border-[#F22044] transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-[#1A202C] mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <RiLockLine className="text-[#A0AEC0] w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={form.password}
                    onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                    placeholder="Enter your password"
                    required
                    className="w-full pl-10 pr-12 py-3 bg-[#F8F9FC] border border-[#E2E8F0] rounded-xl text-sm text-[#1A202C] placeholder-[#A0AEC0] focus:outline-none focus:ring-2 focus:ring-[#F22044]/30 focus:border-[#F22044] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(v => !v)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#A0AEC0] hover:text-[#718096] transition-colors"
                  >
                    {showPassword ? <RiEyeOffLine className="w-4 h-4" /> : <RiEyeLine className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#F22044] text-white font-semibold text-sm rounded-xl hover:bg-[#C41535] disabled:opacity-60 disabled:cursor-not-allowed transition-all focus:outline-none focus:ring-2 focus:ring-[#F22044]/40 focus:ring-offset-2"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Signing in...
                  </span>
                ) : 'Sign In'}
              </button>
            </form>

            <p className="text-center text-[#A0AEC0] text-xs mt-6">
              Need access? Contact your OnePoint account manager.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
