import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('sb-access-token')

  const isLoginPage = request.nextUrl.pathname.startsWith('/login')

  if (!isLoggedIn && !isLoginPage) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*'],
}
