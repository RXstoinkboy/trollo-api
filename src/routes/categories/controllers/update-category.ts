import db from '../../../config/db'
import query from '../models/update-query'
import { QueryResult } from 'pg'
import Params from '../interfaces/update-params.interface'

export default async function updateCategory({
    category_id,
    name,
    description,
    color,
    ui_position,
}: Params, { user_id }: string | any): Promise<void> {
    const client = await db.connect()

    try {
        if (!category_id) throw new Error('category_id not specified')

        await client.query('BEGIN;')

        if (user_id) {
            let usersCategoriesParams: [string, string] = [category_id, user_id]

            await client.query(query.usersCategories, usersCategoriesParams)
        }
        if (name || ui_position) {
            let categoriesParams: [string, string | null, number | null] = [
                category_id,
                name,
                ui_position,
            ]

            await client.query(query.categories, categoriesParams)
        }
        if (description || color) {
            let categoriesDetailsParams: [
                string,
                string | null,
                string | null,
            ] = [category_id, description, color]

            const usersCategoriesDetailsResult: QueryResult = await client.query(
                query.categoriesDetails,
                categoriesDetailsParams,
            )

            if (!usersCategoriesDetailsResult.rows[0]) {
                let insertDetailsParams: [
                    string,
                    string | null,
                    string | null,
                ] = [category_id, description, color]

                await client.query(query.insertDetails, insertDetailsParams)
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
