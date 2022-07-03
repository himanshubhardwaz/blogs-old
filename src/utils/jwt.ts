import jwt from 'jsonwebtoken'

const secret = process.env.SECRET || 'dskjhdkssdhkdjhs'

export function signJwt(data: object) {
    return jwt.sign(data, secret);
}

export function verifyJwt<T>(token: string) {
    return jwt.verify(token, secret) as T
}