import { Request, Response } from 'express'
import db from '../../config/db'
import { v4 as uuid } from 'uuid'
import { QueryResult } from 'pg'
import { CreateCategory } from './interfaces/CreateCategory.interface'

const addCategory: string =
    'insert into categories (public_id, name) values ($1, $2) returning public_id, name;'
const addCategoryDetails: string =
    'insert into categories_details (category_id, description, color) values($1, $2, $3) returning description, color;'
const assignToUserQuery: string = `insert into users_categories (user_id, category_id) values ($1, $2) returning user_id;`

const public_id: string = uuid()

export default async function createCategory(req: Request, res: Response) {
    const { user_id, name, description, color }: CreateCategory = req.body

    const client = await db.connect()

    try {
        await client.query('BEGIN;')

        let categoryParams: [string, string] = [public_id, name]
        let categoryDetailsParams: [string, string?, string?] = [
            public_id,
            description,
            color,
        ]
        let assignToUserParams: [string, string] = [user_id, public_id]

        const addCategoryResult: QueryResult = await client.query(
            addCategory,
            categoryParams,
        )
        const assignToUserResult: QueryResult = await client.query(
            assignToUserQuery,
            assignToUserParams,
        )
        const { public_id: db_id, name: db_name } = addCategoryResult.rows[0]
        const { user_id: o_user_id } = assignToUserResult.rows[0]

        if (description || color) {
            const detailsResult: QueryResult = await client.query(
                addCategoryDetails,
                categoryDetailsParams,
            )
            const { description, color } = detailsResult.rows[0]

            await client.query('COMMIT;')

            res.status(200).json({
                message: 'Category successfully created',
                db_name,
                db_id,
                description,
                color,
                o_user_id,
            })
        }

        // TODO: jeszcze trzeba przypisać do usera

        await client.query('COMMIT;')

        res.status(200).json({
            message: 'Category successfully created',
            db_name,
            db_id,
            o_user_id,
        })
    } catch (err) {
        await client.query('ROLLBACK;')
        res.status(400).json({
            message: 'Sorry, there was an error while creating category.',
        })

        console.error(err)
    } finally {
        client.release()
    }
}
