import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/utils/prisma'
import { verifyJwt } from '@/utils/jwt'

interface CtxUser {
    id: string
    email: string
    name: string
    iat: string
    exp: string
}

function getUserFromRequest(req: NextApiRequest) {
    const token = req.cookies.token

    if (token) {
        try {
            const verfied = verifyJwt<CtxUser>(token);
            return verfied
        } catch (error) {
            return null
        }
    }

    return null
}

export function createContext({
    req,
    res
}: {
    req: NextApiRequest
    res: NextApiResponse
}) {

    const user = getUserFromRequest(req)
    return { req, res, prisma, user }
}

export type Context = ReturnType<typeof createContext>