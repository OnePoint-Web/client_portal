import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { jwtVerify } from 'jose'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('client_auth_token')?.value

    if (!token) return NextResponse.json({ user: null }, { status: 401 })

    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    )

    return NextResponse.json({ user: payload })
  } catch {
    return NextResponse.json({ user: null }, { status: 401 })
  }
}
