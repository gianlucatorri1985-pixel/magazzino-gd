import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const cookies = request.cookies.getAll()

  const hasSupabaseToken = cookies.some(cookie =>
    cookie.name.startsWith('sb-') && cookie.name.includes('auth-token')
  )

  const isLoginPage = request.nextUrl.pathname.startsWith('/login')

  if (!hasSupabaseToken && !isLoginPage) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*'],
}
