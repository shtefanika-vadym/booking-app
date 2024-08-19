import type { NextAuthConfig } from 'next-auth'
import { NextResponse } from 'next/server'

export const authConfig = {
  pages: {
    signIn: '/auth/login'
  },
  providers: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnPrivateRoute = /^\/(dashboard|service|booking)/.test(nextUrl.pathname)
      if (isOnPrivateRoute) return isLoggedIn
      else if (isLoggedIn) return NextResponse.redirect(new URL('/dashboard', nextUrl))

      return true
    }
  }
} satisfies NextAuthConfig
