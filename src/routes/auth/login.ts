import { Request, Response, NextFunction } from 'express'
import passport from 'passport'
import jwt, { SignOptions } from 'jsonwebtoken'

export async function login(req: Request, res: Response, next: NextFunction) {
    try {
        passport.authenticate(
            'local',
            { session: false },
            (err, user, info) => {
                const { message } = info

                if (err || !user || !user.active) {
                    res.status(400).json({
                        message,
                        user,
                    })
                }
                req.login(user, { session: false }, (err) => {
                    if (err) res.status(400).send(err)
                    const secret: any = process.env.JWT_SECRET
                    const jwtOptions: SignOptions = {
                        expiresIn: '2d'
                    }
                    const token = jwt.sign({ user_id: user.public_id }, secret, jwtOptions)
                    return res.status(200).json({ message, token })
                })
            },
        )(req, res)
    } catch (err) {
        console.error(err)
        res.status(400).json({ message: 'Login failure' })
    }
}
