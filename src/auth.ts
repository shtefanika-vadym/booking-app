import { z } from 'zod'
import NextAuth from 'next-auth'
import type { NextAuthConfig } from 'next-auth'

import credentials from 'next-auth/providers/credentials'
import { getUserByEmail } from '@/lib/actions/user.actions'
import { authConfig } from '@/auth.config'

const authOptions: NextAuthConfig = {
  ...authConfig,
  providers: [
    credentials({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials)

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data
          const user = await getUserByEmail(email)
          if (!user) return null
          const passwordsMatch = password === user.password
          if (passwordsMatch) return user
        }
        console.log('Invalid credentials')
        return null
      }
    })
  ]
}

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)
