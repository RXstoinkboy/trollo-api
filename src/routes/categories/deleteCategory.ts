import { Response, Request } from 'express'
import db from '../../config/db'

type CategoryId = {
    category_id: string
}

const deleteCategoryQuery: string =
    'delete from categories where public_id = $1;'
const deleteUsersCategoryQuery: string =
    'delete from users_categories where category_id = $1;'
const deleteCategoryDetailsQuery: string =
    'delete from categories_details where category_id = $1;'
const deleteExpensesCategoriesQuery: string =
    'delete from expenses_categories where category_id = $1;'

export default async function deleteCategory(req: Request, res: Response) {
    const { category_id }: CategoryId = req.body

    const client = await db.connect()

    try {
        let deleteParams: [string] = [category_id]

        await client.query('BEGIN;')

        await client.query(deleteCategoryQuery, deleteParams)
        await client.query(deleteUsersCategoryQuery, deleteParams)
        await client.query(deleteCategoryDetailsQuery, deleteParams)
        await client.query(deleteExpensesCategoriesQuery, deleteParams)

        await client.query('COMMIT;')

        res.status(200).json({ message: 'Category successfully deleted.' })
    } catch (err) {
        await client.query('ROLLBACK;')
        console.error(err)
        res.status(500).send(
            'Sorry, we encountered an error while deleting category',
        )
    } finally {
        client.release()
    }
}
