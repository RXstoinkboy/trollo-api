import db from '../../../config/db'
import { v4 as uuid } from 'uuid'
import query from '../models/insert-query'

type Params = {
    amount: number
    name: string
    description: string
    category: string
    user: string
}

export default async function insertExpense({
    amount,
    name,
    description,
    category,
    user,
}: Params): Promise<void> {
    const public_id: string = uuid() // generate unique ID for expense
    const client = await db.connect() // open connection with DB

    try {
        await client.query('BEGIN;') // start transaction
        // default query to insert at least amount spent

        let AmountParams: [string, number] = [public_id, amount]

        await client.query(query.insertAmount, AmountParams)

        let assignToUserParams: [string, string] = [user, public_id]
        await client.query(query.assignToUser, assignToUserParams)

        // if there are any details added when inserting them put them into db too
        if (name || description) {
            let detailsParams: [string, string?, string?] = [
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
    } catch (err) {
        await client.query('ROLLBACK;')
        console.error(err)
        throw err
    } finally {
        client.release()
    }
}
