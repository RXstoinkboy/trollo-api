import db from '../../../config/db'
import query from '../models/query'
import { QueryResult } from 'pg'

type Params = {
    public_id: string
    password: string
    new_password: string
    repeat_new_password: string
}

type CredentialsConfirmation = {
    password: string
}

export default async function updatePassword({
    public_id,
    password,
    new_password,
    repeat_new_password,
}: Params): Promise<boolean> {
    let getUserParams: [string] = [public_id]

    const client = await db.connect()

    try {
        await client.query('BEGIN;')

        const userDataResult: QueryResult = await client.query(
            query.getUserData,
            getUserParams,
        )
        const {
            password: db_password,
        }: CredentialsConfirmation = userDataResult.rows[0]

        if (password === db_password && new_password === repeat_new_password) {
            let updateParams: [string, string] = [public_id, new_password]
            await db.query(query.updatePassword, updateParams)
            await client.query('COMMIT;')

            return true
        }

        await client.query('COMMIT;')
        return false
    } catch (err) {
        console.error(err)
        await client.query('ROLLBACK;')

        throw err
    } finally {
        client.release()
    }
}
