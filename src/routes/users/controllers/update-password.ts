import db from '../../../config/db'
import query from '../models/query'
import { QueryResult } from 'pg'
import Params from '../interfaces/update-password-params.interface'
import bcrypt from 'bcrypt'
import passport from 'passport'

type CredentialsConfirmation = {
    password: string
}

export default async function updatePassword({
    public_id,
    password,
    new_password,
    repeat_new_password,
}: Params): Promise<void> {
    let getUserParams: [string] = [public_id]

    const client = await db.connect()

    try {
        if (!public_id) throw new Error('public_id not specified')
        if (!password) throw new Error('password not specified')
        if (!new_password) throw new Error('new_password not specified')
        if (!repeat_new_password)
            throw new Error('repeat_new_password not specified')
        if (new_password !== repeat_new_password)
            throw new Error('"new password" and "repeat new password was not the same."')

        await client.query('BEGIN;')

        const userDataResult: QueryResult = await client.query(
            query.getUserData,
            getUserParams,
        )
        const {
            password: db_password,
        }: CredentialsConfirmation = userDataResult.rows[0]

        const saltRounds = process.env.NODE_ENV === 'production' ? 12 : 10
        const hashedPassword = await bcrypt.hash(new_password, saltRounds)

        const providedPasswordIsCorrect = await bcrypt.compare(password, db_password);
        if (!providedPasswordIsCorrect)
            throw new Error('Provided password was not correct.')

        if (providedPasswordIsCorrect && new_password === repeat_new_password) {
            let updateParams: [string, string] = [public_id, hashedPassword]
            await db.query(query.updatePassword, updateParams)
        }

        await client.query('COMMIT;')
    } catch (err) {
        console.error(err)
        await client.query('ROLLBACK;')

        throw err
    } finally {
        client.release()
    }
}
