import db from '../../../config/db'
import query from '../models/delete-query'
import Params from '../interfaces/delete-params.interface'

export default async function deleteExpense({
    expense_id,
}: Params): Promise<void> {
    const client = await db.connect()
    try {
        if (!expense_id) throw new Error('expense_id not specified')

        let deleteParams: [string] = [expense_id]

        await client.query('BEGIN;')

        await client.query(query.deleteExpense, deleteParams)
        await client.query(query.deleteDetails, deleteParams)
        await client.query(query.deleteFromCategory, deleteParams)
        await client.query(query.deleteFromUser, deleteParams)

        await client.query('COMMIT;')
    } catch (err) {
        await client.query('ROLLBACK;')
        console.error(err)
        throw err
    } finally {
        client.release()
    }
}
