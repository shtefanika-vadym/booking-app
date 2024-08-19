import { NextResponse } from 'next/server'
import { ZodError } from 'zod'
import type { ResetPasswordSchemaType } from '@/features/auth/schemas/reset-password-schema'
import { ResetPasswordSchema } from '@/features/auth/schemas/reset-password-schema'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsedData: ResetPasswordSchemaType = ResetPasswordSchema.parse(body)

    // TODO: Reset logic

    return NextResponse.json({ message: 'Please check the email address' })
  } catch (error) {
    if (error instanceof ZodError)
      return NextResponse.json({ error: error.errors }, { status: 400 })

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
