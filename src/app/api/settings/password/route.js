import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { getAuthPayload } from '@/lib/auth'
import prisma from '@/lib/prisma'

export async function POST(req) {
  try {
    const payload = await getAuthPayload()
    if (!payload || payload.accountRole !== 3) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { currentPassword, newPassword } = await req.json()

    if (!currentPassword || !newPassword) {
      return NextResponse.json({ error: 'Both fields are required' }, { status: 400 })
    }

    if (newPassword.length < 8) {
      return NextResponse.json({ error: 'Password must be at least 8 characters' }, { status: 400 })
    }

    const user = await prisma.user.findUnique({
      where: { userId: payload.userId },
      select: { userPassword: true },
    })

    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    const valid = await bcrypt.compare(currentPassword, user.userPassword)
    if (!valid) return NextResponse.json({ error: 'Current password is incorrect' }, { status: 400 })

    const hashed = await bcrypt.hash(newPassword, 12)
    await prisma.user.update({
      where: { userId: payload.userId },
      data: { userPassword: hashed },
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Password change error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
