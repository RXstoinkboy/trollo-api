import db from '../../../config/db'
import query from '../models/query'
import { v4 as uuid } from 'uuid'
import { QueryResult } from 'pg'
import User from '../interfaces/User.interface'

interface params {
    login: string
    password: string
}

export default async function insertUser({
    login,
    password,
}: params): Promise<string> {
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
