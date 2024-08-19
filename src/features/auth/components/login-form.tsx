'use client'

import { useForm } from 'react-hook-form'

import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { AUTH_CONSTANTS } from '@/features/auth/constants/auth-constants'
import type { LoginSchemaType } from '@/features/auth/schemas/login-schema'
import { LoginSchema } from '@/features/auth/schemas/login-schema'
import { useLoginMutation } from '@/features/auth/hooks/use-login-mutation'
import DynamicFormFieldList from '@/components/ui/dynamic-form-field-list'
import { LOGIN_FORM_FIELD_LIST } from '@/features/auth/constants/login-form-field-list'

export default function LoginForm() {
  const { toast } = useToast()
  const { mutateAsync: login, isPending } = useLoginMutation()

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema)
  })

  async function onSubmit(data: LoginSchemaType): Promise<void> {
    const response = await login(data)

    toast({
      description: response
    })
  }

  return (
    <Form {...form}>
      <h2 className="mb-10 mt-3 text-center text-3xl font-bold">{AUTH_CONSTANTS.LOG_IN}</h2>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <DynamicFormFieldList<LoginSchemaType>
          control={form.control}
          fields={LOGIN_FORM_FIELD_LIST}
        />
        <Button disabled={isPending} type="submit" className="my-7 w-full">
          {AUTH_CONSTANTS.LOGIN}
        </Button>
      </form>
    </Form>
  )
}
