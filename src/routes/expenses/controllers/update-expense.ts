import query from '../models/update-query'
import db from '../../../config/db'
import { QueryResult } from 'pg'

type Params = {
    public_id: string
    amount: number
    name: string
    description: string
}

export default async function updateExpense({
    public_id,
    amount,
    name,
    description,
}: Params): Promise<void> {
    const client = await db.connect()

    try {
        await client.query('BEGIN;')

        if (amount) {
            let ExpenseParams: [string, number] = [public_id, amount]

            const queryResult: QueryResult = await client.query(
                query.amount,
                ExpenseParams,
            )
            // extract data
            const newAmount: number = queryResult.rows[0].amount

            //   double check if new data from DB is the same as the one which we wanted to update
            if (newAmount !== amount)
                throw new Error('Updating amount went wrong!')
        }

        if (name || description) {
            let DetailsParams: [string, string | null, string | null] = [
                public_id,
                name,
                description,
            ]

            await client.query(query.nameOrDesc, DetailsParams)
        }
        client.query('COMMIT;')
    } catch (err) {
        await client.query('ROLLBACK;')
        console.error(err)
        throw err
    } finally {
        client.release()
    }
}
