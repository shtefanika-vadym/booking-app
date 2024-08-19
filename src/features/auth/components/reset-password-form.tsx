'use client'

import { useForm } from 'react-hook-form'

import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { AUTH_CONSTANTS } from '@/features/auth/constants/auth-constants'
import type { ResetPasswordSchemaType } from '@/features/auth/schemas/reset-password-schema'
import { ResetPasswordSchema } from '@/features/auth/schemas/reset-password-schema'
import { useResetPasswordMutation } from '@/features/auth/hooks/use-reset-password-mutation'
import type { ApiResponseMessageType } from '@/types/api-response-message-type'
import DynamicFormFieldList from '@/components/ui/dynamic-form-field-list'
import { RESET_PASSWORD_FORM_FIELD_LIST } from '@/features/auth/constants/reset-password-form-field-list'

export default function ResetPasswordForm() {
  const { toast } = useToast()
  const { mutateAsync: resetPassword, isPending: isResettingPassword } = useResetPasswordMutation()
  const form = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(ResetPasswordSchema)
  })

  async function onSubmit(data: ResetPasswordSchemaType): Promise<void> {
    const result: ApiResponseMessageType = await resetPassword(data)
    toast({
      description: result.message
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <DynamicFormFieldList<ResetPasswordSchemaType>
          control={form.control}
          fields={RESET_PASSWORD_FORM_FIELD_LIST}
        />
        <Button disabled={isResettingPassword} type="submit" className="my-7 w-full">
          {AUTH_CONSTANTS.RESET_PASSWORD}
        </Button>
      </form>
    </Form>
  )
}
