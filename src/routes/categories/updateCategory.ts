import { Request, Response } from 'express'
import db from '../../config/db'
import { UpdateCategory } from './interfaces/UpdateCategory.interface'
import { QueryResult, Query } from 'pg'

const categoriesQuery: string = `
    update categories set
        name = coalesce($2, name)
    where public_id = $1
    returning name;
`
const categoriesDetailsQuery: string = `
    update categories_details set
        description = coalesce($2, description),
        color = coalesce($3, color)
    where category_id = $1
    returning description, color;
`
const insertDetailsQuery: string = `
    insert into categories_details
        (category_id, description, color)
    values ($1, $2, $3)
    returning description, color;
`
const usersCategoriesQuery: string = `
    update users_categories set
        user_id = coalesce($2, user_id)
    where category_id = $1
    returning user_id
`
export interface CategoryUpdateResponse {
    category_id: string
    user_id?: string
    name?: string
    description?: string | null
    color?: string | null
}

export default async function updateCategory(req: Request, res: Response) {
    const {
        category_id,
        user_id,
        name,
        description,
        color,
    }: UpdateCategory = req.body

    const client = await db.connect()

    try {
        let resObject: CategoryUpdateResponse = {
            category_id,
        }

        await client.query('BEGIN;')

        if (user_id) {
            let usersCategoriesParams: [string, string] = [category_id, user_id]

            const usersCategoriesResult: QueryResult = await client.query(
                usersCategoriesQuery,
                usersCategoriesParams,
            )
            const { user_id: o_user_id } = usersCategoriesResult.rows[0]

            resObject.user_id = o_user_id
        }

        if (description || color) {
            let categoriesDetailsParams: [
                string,
                string | null,
                string | null,
            ] = [category_id, description, color]

            const usersCategoriesDetailsResult: QueryResult = await client.query(
                categoriesDetailsQuery,
                categoriesDetailsParams,
            )
            if (usersCategoriesDetailsResult.rows[0]) {
                const {
                    description: o_description,
                    color: o_color,
                } = usersCategoriesDetailsResult.rows[0]

                resObject.description = o_description
                resObject.color = o_color
            }

            if (!usersCategoriesDetailsResult.rows[0]) {
                let insertDetailsParams: [
                    string,
                    string | null,
                    string | null,
                ] = [category_id, description, color]

                const insertDetailsResults: QueryResult = await client.query(
                    insertDetailsQuery,
                    insertDetailsParams,
                )
                const {
                    description: o_description,
                    color: o_color,
                } = insertDetailsResults.rows[0]

                resObject.description = o_description
                resObject.color = o_color
            }
        }

        if (name) {
            let categoriesParams: [string, string | null] = [category_id, name]

            const categoriesQueryResult: QueryResult = await client.query(
                categoriesQuery,
                categoriesParams,
            )
            const { name: o_name } = categoriesQueryResult.rows[0]

            resObject.name = o_name
        }

        await client.query('COMMIT;')

        res.status(200).json({
            message: 'Update was successful',
            resObject,
        })
    } catch (err) {
        await client.query('ROLLBACK;')
        console.error(err)
        res.status(500).send('Sorry, we had inteneal error')
    } finally {
        client.release()
    }
}
