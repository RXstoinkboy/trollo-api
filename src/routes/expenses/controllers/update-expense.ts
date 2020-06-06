import query from '../models/update-query'
import db from '../../../config/db'
import { QueryResult } from 'pg'
import Params from '../interfaces/update-params.interface'

export default async function updateExpense({
    public_id,
    amount,
    name,
    description,
}: Params): Promise<void> {
    const client = await db.connect()

    try {
        if (!public_id) throw new Error('public_id not specified')

        await client.query('BEGIN;')

        if (amount) {
            let ExpenseParams: [string, number] = [public_id, amount]

            await client.query(query.amount, ExpenseParams)
        }

        if (name || description) {
            let DetailsParams: [string, string | null, string | null] = [
                public_id,
                name,
                description,
            ]

            const expenseDetailsResults: QueryResult = await client.query(
                query.nameOrDesc,
                DetailsParams,
            )

            if (!expenseDetailsResults.rows[0]) {
                let insertDetailsParams: [
                    string,
                    string | null,
                    string | null,
                ] = [public_id, name, description]

                await client.query(query.insertNameOrDesc, insertDetailsParams)
            }
        }

        await client.query('COMMIT;')
    } catch (err) {
        await client.query('ROLLBACK;')
        console.error(err)
        throw err
    } finally {
        client.release()
    }
}
