import db from '../../../config/db'
import query from '../models/delete-query'

type Params = {
    expense_id: string
}
export default async function deleteExpense({
    expense_id,
}: Params): Promise<void> {
    const client = await db.connect()
    try {
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
