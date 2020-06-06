import db from '../../../config/db'
import { v4 as uuid } from 'uuid'
import query from '../models/insert-query'
import Params from '../interfaces/create-params.interface'

export default async function insertExpense({
    amount,
    name,
    description,
    category,
    user,
}: Params): Promise<string> {
    const public_id: string = uuid() // generate unique ID for expense
    const client = await db.connect() // open connection with DB

    try {
        if (!user) throw new Error('user not specified')
        if (!amount) throw new Error('amount not specified')

        await client.query('BEGIN;') // start transaction
        // default query to insert at least amount spent

        let AmountParams: [string, number] = [public_id, amount]

        await client.query(query.insertAmount, AmountParams)

        let assignToUserParams: [string, string] = [user, public_id]
        await client.query(query.assignToUser, assignToUserParams)

        // if there are any details added when inserting them put them into db too
        if (name || description) {
            let detailsParams: [string, string | null, string | null] = [
                public_id,
                name,
                description,
            ]

            await client.query(query.insertDetails, detailsParams)
        }

        if (category) {
            let assignToCategoryParams: [string, string] = [public_id, category]

            await client.query(query.assignToCategory, assignToCategoryParams)
        }

        await client.query('COMMIT;') // finish transaction
        return public_id
    } catch (err) {
        await client.query('ROLLBACK;')
        console.error(err)
        throw err
    } finally {
        client.release()
    }
}
