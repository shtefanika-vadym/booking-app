'use client'

import { useMutation } from '@tanstack/react-query'
import { AuthApi } from '@/features/auth/lib/auth-api'
import type { ResetPasswordSchemaType } from '@/features/auth/schemas/reset-password-schema'

const { resetPassword } = AuthApi

export const useResetPasswordMutation = () => {
  const mutationFn = (data: ResetPasswordSchemaType) => resetPassword(data)

  return useMutation({ mutationFn })
}
