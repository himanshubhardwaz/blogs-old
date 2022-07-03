import z from 'zod'

export const createPostSchema = z.object({
    title: z.string().max(185, 'Max title length reached'),
    body: z.string().min(10, 'Min body length not satisfied'),
})

export const getSinglePostSchema = z.object({
    postId: z.string().uuid()
})

export type CreatePostInput = z.TypeOf<typeof createPostSchema>