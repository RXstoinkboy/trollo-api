import { Request, Response, NextFunction } from 'express'
import passport from 'passport'
import jwt from 'jsonwebtoken'

export async function login(req: Request, res: Response, next: NextFunction) {
    try {
        passport.authenticate(
            'local',
            { session: false },
            (err, user, info) => {
                const { message } = info

                if (err || !user) {
                    res.status(400).json({
                        info,
                        user,
                    })
                }
                req.login(user, { session: false }, (err) => {
                    if (err) res.status(400).send(err)
                    const secret: any = process.env.JWT_SECRET
                    const token = jwt.sign(user.public_id, secret)
                    return res.status(200).json({ message, token })
                })
            },
        )(req, res)
    } catch (err) {
        console.error(err)
        res.status(400).json({ message: 'Login failure' })
    }
}
