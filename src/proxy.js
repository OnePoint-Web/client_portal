import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

export async function proxy(req) {
  const token = req.cookies.get('client_auth_token')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    )

    if (payload.accountRole !== 3) {
      return NextResponse.redirect(new URL('/login', req.url))
    }

    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/proposals/:path*', '/company-info/:path*', '/settings/:path*'],
}
