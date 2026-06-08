'use client'
import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import {
  RiUserLine,
  RiLockLine,
  RiBuildingLine,
  RiEyeLine,
  RiEyeOffLine,
  RiSaveLine,
  RiLogoutCircleRLine,
} from 'react-icons/ri'

export default function SettingsClient({ user: serverUser }) {
  const { user, logout } = useAuth()
  const displayUser = user ?? serverUser

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [showPasswords, setShowPasswords] = useState({})
  const [saving, setSaving] = useState(false)
  const [feedback, setFeedback] = useState({ type: '', message: '' })

  function toggleShow(field) {
    setShowPasswords(prev => ({ ...prev, [field]: !prev[field] }))
  }

  async function handlePasswordChange(e) {
    e.preventDefault()
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setFeedback({ type: 'error', message: 'New passwords do not match.' })
      return
    }
    if (passwordForm.newPassword.length < 8) {
      setFeedback({ type: 'error', message: 'Password must be at least 8 characters.' })
      return
    }

    setSaving(true)
    setFeedback({ type: '', message: '' })

    try {
      const res = await fetch('/api/settings/password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentPassword: passwordForm.currentPassword,
          newPassword: passwordForm.newPassword,
        }),
      })
      const data = await res.json()
      if (res.ok) {
        setFeedback({ type: 'success', message: 'Password updated successfully.' })
        setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
      } else {
        setFeedback({ type: 'error', message: data.error || 'Failed to update password.' })
      }
    } catch {
      setFeedback({ type: 'error', message: 'Something went wrong.' })
    } finally {
      setSaving(false)
    }
  }

  const initials = displayUser
    ? `${displayUser.firstName?.[0] ?? ''}${displayUser.lastName?.[0] ?? ''}`.toUpperCase()
    : 'CL'

  return (
    <div className="space-y-6 max-w-2xl">
      {/* Page header */}
      <div>
        <h1 className="text-xl font-bold text-[#1A202C]">Settings</h1>
        <p className="text-sm text-[#718096] mt-1">Manage your account preferences</p>
      </div>

      {/* Profile card */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-5">
        <div className="flex items-center gap-2 mb-4">
          <RiUserLine className="w-4 h-4 text-[#F22044]" />
          <h2 className="text-sm font-bold text-[#1A202C]">Account Information</h2>
        </div>

        <div className="flex items-center gap-4 mb-5 pb-5 border-b border-[#F0F2F8]">
          <div className="w-14 h-14 rounded-2xl bg-[#1A1A2E] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg">{initials}</span>
          </div>
          <div>
            <p className="text-base font-bold text-[#1A202C]">
              {displayUser?.firstName} {displayUser?.lastName}
            </p>
            <p className="text-sm text-[#718096]">{displayUser?.email}</p>
            {displayUser?.companyName && (
              <div className="flex items-center gap-1.5 mt-1">
                <RiBuildingLine className="w-3.5 h-3.5 text-[#A0AEC0]" />
                <p className="text-xs text-[#A0AEC0]">{displayUser.companyName}</p>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'First Name', value: displayUser?.firstName },
            { label: 'Last Name', value: displayUser?.lastName },
            { label: 'Username', value: displayUser?.username },
            { label: 'Email', value: displayUser?.email },
          ].map(field => (
            <div key={field.label}>
              <p className="text-xs font-semibold text-[#A0AEC0] mb-1.5">{field.label}</p>
              <div className="px-3.5 py-2.5 bg-[#F8F9FC] border border-[#E2E8F0] rounded-xl text-sm text-[#1A202C] font-medium">
                {field.value ?? '—'}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-[#A0AEC0] mt-4">
          To update your profile information, please contact your OnePoint account manager.
        </p>
      </div>

      {/* Change password */}
      <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-5">
        <div className="flex items-center gap-2 mb-4">
          <RiLockLine className="w-4 h-4 text-[#F22044]" />
          <h2 className="text-sm font-bold text-[#1A202C]">Change Password</h2>
        </div>

        <form onSubmit={handlePasswordChange} className="space-y-4">
          {[
            { field: 'currentPassword', label: 'Current Password' },
            { field: 'newPassword', label: 'New Password' },
            { field: 'confirmPassword', label: 'Confirm New Password' },
          ].map(({ field, label }) => (
            <div key={field}>
              <label className="block text-xs font-semibold text-[#A0AEC0] mb-1.5">{label}</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <RiLockLine className="w-4 h-4 text-[#A0AEC0]" />
                </div>
                <input
                  type={showPasswords[field] ? 'text' : 'password'}
                  value={passwordForm[field]}
                  onChange={e => setPasswordForm(prev => ({ ...prev, [field]: e.target.value }))}
                  required
                  className="w-full pl-10 pr-12 py-2.5 bg-[#F8F9FC] border border-[#E2E8F0] rounded-xl text-sm text-[#1A202C] focus:outline-none focus:ring-2 focus:ring-[#F22044]/20 focus:border-[#F22044] transition-all"
                />
                <button
                  type="button"
                  onClick={() => toggleShow(field)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#A0AEC0] hover:text-[#718096]"
                >
                  {showPasswords[field] ? <RiEyeOffLine className="w-4 h-4" /> : <RiEyeLine className="w-4 h-4" />}
                </button>
              </div>
            </div>
          ))}

          {feedback.message && (
            <div className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm ${
              feedback.type === 'success'
                ? 'bg-green-50 border-green-200 text-green-700'
                : 'bg-red-50 border-red-200 text-red-600'
            }`}>
              {feedback.message}
            </div>
          )}

          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#F22044] text-white font-semibold text-sm rounded-xl hover:bg-[#C41535] disabled:opacity-60 disabled:cursor-not-allowed transition-all"
          >
            <RiSaveLine className="w-4 h-4" />
            {saving ? 'Saving...' : 'Update Password'}
          </button>
        </form>
      </div>

      {/* Danger zone */}
      <div className="bg-white rounded-2xl border border-red-200 shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-5">
        <h2 className="text-sm font-bold text-red-600 mb-3">Sign Out</h2>
        <p className="text-xs text-[#718096] mb-4">You will be signed out of your client portal session.</p>
        <button
          onClick={logout}
          className="flex items-center gap-2 px-5 py-2.5 border-2 border-red-400 text-red-500 font-semibold text-sm rounded-xl hover:bg-red-50 transition-all"
        >
          <RiLogoutCircleRLine className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </div>
  )
}
