import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma/client'
import { ZodError } from 'zod'
import type { RegisterSchemaType } from '@/features/auth/schemas/register-schema'
import { RegisterSchema } from '@/features/auth/schemas/register-schema'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { areAgreeWithTerms: _, ...parsedData }: RegisterSchemaType = RegisterSchema.parse(body)

    const existingUser = await prisma.user.findUnique({
      where: { email: parsedData.email }
    })

    if (existingUser) return NextResponse.json({ error: 'Email already in use' }, { status: 400 })

    const newUser = await prisma.user.create({
      data: parsedData
    })

    return NextResponse.json({ message: 'User registered successfully' })
  } catch (error) {
    if (error instanceof ZodError)
      return NextResponse.json({ error: error.errors }, { status: 400 })

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
