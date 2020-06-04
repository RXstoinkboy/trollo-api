import db from '../../../config/db'
import query from '../models/delete-query'

type Params = {
    category_id: string
}

export default async function deleteCategory({ category_id }: Params) {
    const client = await db.connect()
    try {
        if (!category_id) throw new Error('category_id not specified')

        await client.query('BEGIN;')

        let deleteParams: [string] = [category_id]

        await client.query(query.deleteCategory, deleteParams)
        await client.query(query.deleteUsersCategory, deleteParams)
        await client.query(query.deleteCategoryDetails, deleteParams)
        await client.query(query.deleteExpensesCategories, deleteParams)

        await client.query('COMMIT;')
    } catch (err) {
        await client.query('ROLLBACK;')

        console.error(err)
        throw err
    } finally {
        client.release()
    }
}
