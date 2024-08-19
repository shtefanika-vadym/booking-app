'use server'

import { signIn } from '@/auth'
import { AuthError } from 'next-auth'
import prisma from '@/lib/prisma/client'
import type { LoginSchemaType } from '@/features/auth/schemas/login-schema'

export async function authenticate(data: LoginSchemaType) {
  try {
    await signIn('credentials', data)
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'User not found.'
      }
    }
    throw error
  }
}

export async function getUserByEmail(email: string) {
  return prisma.user.findFirst({ where: { email } })
}
