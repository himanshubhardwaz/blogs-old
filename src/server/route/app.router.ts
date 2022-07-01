import { createRouter } from "../createRouter";

export const appRouter = createRouter().query('hello', {
    resolve: () => {
        return 'Trpc working!!'
    }
})

export type AppRouter = typeof appRouter