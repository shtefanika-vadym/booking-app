'use client'

import { useMutation } from '@tanstack/react-query'
import { authenticate } from '@/lib/actions/user.actions'
import type { LoginSchemaType } from '@/features/auth/schemas/login-schema'

export const useLoginMutation = () => {
  const mutationFn = (data: LoginSchemaType) => authenticate(data)

  return useMutation({ mutationFn })
}
