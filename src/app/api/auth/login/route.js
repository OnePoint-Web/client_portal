import { NextResponse } from 'next/server'
import { SignJWT } from 'jose'
import bcrypt from 'bcryptjs'
import prisma from '@/lib/prisma'

export async function POST(req) {
  try {
    const { username, password } = await req.json()

    if (!username || !password) {
      return NextResponse.json({ error: 'Username and password are required' }, { status: 400 })
    }

    const user = await prisma.user.findUnique({
      where: { username },
      include: {
        role: true,
        userStatus: true,
        clientProfile: true,
      },
    })

    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    if (user.accountRole !== 3) {
      return NextResponse.json({ error: 'Access denied. Client account required.' }, { status: 403 })
    }

    if (user.accountStatus !== 2) {
      return NextResponse.json({ error: 'Account is inactive. Please contact support.' }, { status: 403 })
    }

    const passwordMatch = await bcrypt.compare(password, user.userPassword)
    if (!passwordMatch) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const token = await new SignJWT({
      userId: user.userId,
      username: user.username,
      email: user.userEmail,
      firstName: user.firstName,
      lastName: user.lastName,
      accountRole: user.accountRole,
      clientId: user.clientProfile?.clientId ?? null,
      companyName: user.clientProfile?.companyName ?? null,
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('7d')
      .sign(new TextEncoder().encode(process.env.JWT_SECRET))

    const response = NextResponse.json({
      success: true,
      user: {
        userId: user.userId,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.userEmail,
        companyName: user.clientProfile?.companyName ?? null,
      },
    })

    response.cookies.set('client_auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })

    return response
  } catch (err) {
    console.error('Login error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
