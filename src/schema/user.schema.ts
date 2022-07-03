import z from 'zod'

export const createUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
})

export const createUserOutputSchema = z.object({
    name: z.string(),
    email: z.string().email(),
})

export const requestOtpSchema = z.object({
    email: z.string().email(),
    redirect: z.string().default("/")
})

export type CreateUserInput = z.TypeOf<typeof createUserSchema>
export type RequestOtpSchema = z.TypeOf<typeof requestOtpSchema>