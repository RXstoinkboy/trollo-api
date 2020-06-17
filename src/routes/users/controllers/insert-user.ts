import db from '../../../config/db'
import query from '../models/query'
import { v4 as uuid } from 'uuid'
import { QueryResult } from 'pg'
import User from '../interfaces/user.interface'
import Params from '../interfaces/create-params.interface'
import bcrypt from 'bcrypt'

export default async function insertUser({
    login,
    password,
}: Params): Promise<string> {
    if (!login) throw new Error('login not specified')
    if (!password) throw new Error('password not specified')

    const saltRounds = process.env.NODE_ENV === 'production' ? 12 : 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    console.log('hashedPassword', hashedPassword)

    const user: User = {
        public_id: uuid(),
        login,
        password: hashedPassword,
        active: true,
    }

    let insertParams: [string, string, string] = [
        user.public_id,
        user.login,
        user.password,
    ]

    const queryResult: QueryResult = await db.query(
        query.insertUser,
        insertParams,
    )

    return queryResult.rows[0].public_id
}
