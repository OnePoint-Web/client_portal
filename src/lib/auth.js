import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { jwtVerify } from 'jose'

export async function requireAuth() {
  const cookieStore = await cookies()
  const token = cookieStore.get('client_auth_token')?.value
  if (!token) redirect('/login')

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    )
    if (payload.accountRole !== 3) redirect('/login')
    return payload
  } catch {
    redirect('/login')
  }
}

export async function getAuthPayload() {
  const cookieStore = await cookies()
  const token = cookieStore.get('client_auth_token')?.value
  if (!token) return null

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    )
    return payload
  } catch {
    return null
  }
}
