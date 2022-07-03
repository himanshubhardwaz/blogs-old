import { createContext, ReactNode, useContext } from 'react'
import { AppRouter } from '@/server/route/app.router'
import { inferProcedureOutput } from '@trpc/server'

type TQuery = keyof AppRouter['_def']['queries']

type InferQueryOutput<TRouteKey extends TQuery> = inferProcedureOutput<
    AppRouter['_def']['queries'][TRouteKey]>

const UserContext = createContext<InferQueryOutput<'users.me'>>(null)

export function UserContextProvider({ children, value }: {
    children: ReactNode,
    value: InferQueryOutput<'users.me'> | undefined
}) {
    return (
        <UserContext.Provider value={value || null}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext);
}