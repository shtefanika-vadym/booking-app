'use client'

import { useMutation } from '@tanstack/react-query'
import { AuthApi } from '@/features/auth/lib/auth-api'
import type { RegisterSchemaType } from '@/features/auth/schemas/register-schema'

const { register } = AuthApi

export const useRegisterMutation = () => {
  const mutationFn = (data: RegisterSchemaType) => register(data)

  return useMutation({ mutationFn })
}
