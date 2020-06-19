import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import db from '../db'
import { QueryResult } from 'pg'
import User from '../../routes/users/interfaces/user.interface'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()

const getUserQuery: string = `select public_id, login, password, active from users where login = $1;`

passport.use(
    new LocalStrategy(
        {
            usernameField: 'login',
            passwordField: 'password',
        },
        async (login, password, done) => {
            try {
                let getUserParams: [string] = [login]

                const getUserResult: QueryResult = await db.query(
                    getUserQuery,
                    getUserParams,
                )
                const user: User = getUserResult.rows[0]

                const isPasswordCorrect = await bcrypt.compare(
                    password,
                    user.password,
                )

                if (!user)
                    return done(null, false, { message: 'Incorrect login' })
                if (!isPasswordCorrect)
                    return done(null, false, { message: 'Incorrect password' })
                return done(null, user, { message: 'Logged in successfully' })
            } catch (err) {
                console.error(err)
                return done(err)
            }
        },
    ),
)

import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'

const secret: any = process.env.JWT_SECRET

passport.use(
    new JWTStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: secret
        },
        (jwtPayload, done) => {
            // console.log(jwtPayload)
            return done(null, jwtPayload)
        },
    ),
)
