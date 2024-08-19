'use client'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { AUTH_CONSTANTS } from '@/features/auth/constants/auth-constants'
import type { RegisterSchemaType } from '@/features/auth/schemas/register-schema'
import { RegisterSchema } from '@/features/auth/schemas/register-schema'
import DynamicFormFieldList from '@/components/ui/dynamic-form-field-list'
import { REGISTER_FORM_FIELD_LIST } from '@/features/auth/constants/register-form-field-list'
import { useRegisterMutation } from '@/features/auth/hooks/use-register-mutation'
import { useEffect } from 'react'
import { AxiosError } from 'axios'
import type { ApiResponseMessageType } from '@/types/api-response-message-type'

export default function RegisterForm() {
  const router = useRouter()
  const { toast } = useToast()
  const { mutateAsync: register, isPending, error } = useRegisterMutation()

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema)
  })

  useEffect(() => {
    if (error instanceof AxiosError) {
      toast({
        description: error?.response?.data.error ?? ''
      })
    }
  }, [error])

  async function onSubmit(data: RegisterSchemaType): Promise<void> {
    const { message }: ApiResponseMessageType = await register(data)

    toast({
      description: message
    })
    router.push('/auth/login')
  }

  return (
    <Form {...form}>
      <h2 className="mb-10 mt-3 text-center text-3xl font-bold">{AUTH_CONSTANTS.CREATE_ACCOUNT}</h2>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <DynamicFormFieldList<RegisterSchemaType>
          control={form.control}
          fields={REGISTER_FORM_FIELD_LIST}
        />
        <Button disabled={isPending} type="submit" className="my-7 w-full">
          {AUTH_CONSTANTS.REGISTER}
        </Button>
      </form>
    </Form>
  )
}
