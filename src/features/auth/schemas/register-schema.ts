import { z } from 'zod'

export const RegisterSchema = z.object({
  lastName: z.string(),
  firstName: z.string(),
  email: z.string().email(),
  areAgreeWithTerms: z.boolean().refine((value) => value === true, {
    message: 'You must agree with the terms.'
  }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long.' })
})

export type RegisterSchemaType = z.infer<typeof RegisterSchema>
