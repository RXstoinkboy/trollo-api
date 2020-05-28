import { Request, Response } from 'express'
import db from '../../config/db'
import { v4 as uuid } from 'uuid'
import { AddExpense } from './interfaces/AddExpense.interface'
import { QueryResult } from 'pg'

const insertAmountQuery: string =
    'insert into expenses (public_id, amount) values ($1, $2) returning public_id, amount;'
const insertDetails: string =
    'insert into expenses_details (expense_id, name, description) values ($1, $2, $3) returning name, description;'
const assignToUser: string = `insert into users_expenses (user_id, expense_id) values ($1, $2) returning user_id;`
const assignToCategory: string = `insert into expenses_categories (expense_id, category_id) values ($1, $2) returning category_id;`

export async function addExpense(req: Request, res: Response) {
    const { amount, name, description, category, user }: AddExpense = req.body // get data from request body
    const public_id: string = uuid() // generate unique ID for expense

    const client = await db.connect() // open connection with DB

    try {
        await client.query('BEGIN;') // start transaction
        // default query to insert at least amount spent

        let AmountParams: [string, number] = [public_id, amount]

        const insertAmountResult: QueryResult = await client.query(
            insertAmountQuery,
            AmountParams,
        )
        const {
            public_id: o_public_id,
            amount: o_amount,
        } = insertAmountResult.rows[0]

        let assignToUserParams: [string, string] = [user, public_id]
        const assignToUserResult: QueryResult = await client.query(
            assignToUser,
            assignToUserParams,
        )
        const { user_id: o_user_id } = assignToUserResult.rows[0]

        let resObject: AddExpense = {
            id: o_public_id,
            amount: o_amount,
            user: o_user_id,
        }

        // if there are any details added when inserting them put them into db too
        if (name || description) {
            let detailsParams: [string, string?, string?] = [
                public_id,
                name,
                description,
            ]

            const detailsResult: QueryResult = await client.query(
                insertDetails,
                detailsParams,
            )
            const {
                name: o_name,
                description: o_description,
            } = detailsResult.rows[0]

            resObject.name = o_name
            resObject.description = o_description
        }

        if (category) {
            let assignToCategoryParams: [string, string] = [public_id, category]

            const assignToCategoryResult: QueryResult = await client.query(
                assignToCategory,
                assignToCategoryParams,
            )
            const {
                category_id: o_category_id,
            } = assignToCategoryResult.rows[0]

            resObject.category = o_category_id
        }

        await client.query('COMMIT;') // finish transaction

        res.status(200).json({
            message: 'Expense added to the system',
            data: resObject,
        })
    } catch (err) {
        await client.query('ROLLBACK;')

        console.error(err)
        res.status(400).json({
            message: 'there is unspeciffied error in expense adding',
        })

        //   TODO: improve error handling
    } finally {
        client.release() // temrinate client connection to DB
    }
}
