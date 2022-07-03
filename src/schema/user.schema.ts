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

export const verifyOtpSchema = z.object({
    hash: z.string(),
})

export type CreateUserInput = z.TypeOf<typeof createUserSchema>
export type RequestOtpSchema = z.TypeOf<typeof requestOtpSchema>