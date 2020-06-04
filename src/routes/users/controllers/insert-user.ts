import db from '../../../config/db'
import query from '../models/query'
import { v4 as uuid } from 'uuid'
import { QueryResult } from 'pg'
import User from '../interfaces/user.interface'

interface Params {
    login: string
    password: string
}

export default async function insertUser({
    login,
    password,
}: Params): Promise<string> {
    if (!login) throw new Error('login not specified')
    if (!password) throw new Error('password not specified')

    const user: User = {
        public_id: uuid(),
        login,
        password,
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
