import db from '../../../config/db'
import { v4 as uuid } from 'uuid'
import query from '../models/create-query'
import Params from '../interfaces/create-params.interface'

export default async function createCategory({
    name,
    description,
    color,
    ui_position,
}: Params, { user_id }: string | any): Promise<string> {
    const public_id: string = uuid()
    const client = await db.connect()

    try {
        if (!user_id) throw new Error('user_id not specified')
        if (!name) throw new Error('category name not specified')

        await client.query('BEGIN;')

        let categoryParams: [string, string, number] = [
            public_id,
            name,
            ui_position,
        ]
        let assignToUserParams: [string, string] = [user_id, public_id]

        await client.query(query.addCategory, categoryParams)
        await client.query(query.assignToUser, assignToUserParams)

        if (description || color) {
            let categoryDetailsParams: [
                string,
                string | null,
                string | null,
            ] = [public_id, description, color]

            await client.query(query.addCategoryDetails, categoryDetailsParams)
        }

        await client.query('COMMIT;')
        return public_id
    } catch (err) {
        await client.query('ROLLBACK;')

        console.error(err)
        throw err
    } finally {
        client.release()
    }
}
