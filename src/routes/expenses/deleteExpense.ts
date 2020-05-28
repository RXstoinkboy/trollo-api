import { Request, Response } from 'express'
import db from '../../config/db'
import { DeleteExpense } from './interfaces/DeleteExpense.interface'

const deleteExpenseQuery: string = 'delete from expenses where public_id = $1;'
const deleteDetailsQuery: string =
    'delete from expenses_details where expense_id = $1;'
const deleteFromCategory: string = `delete from expenses_categories where expense_id = $1;`
const deleteFromUser: string = `delete from users_expenses where expense_id = $1;`

export async function deleteExpense(req: Request, res: Response) {
    const { expense_id }: DeleteExpense = req.body

    const client = await db.connect()

    try {
        let deleteParams: [string] = [expense_id]

        await client.query('BEGIN;')

        await client.query(deleteExpenseQuery, deleteParams)
        await client.query(deleteDetailsQuery, deleteParams)
        await client.query(deleteFromCategory, deleteParams)
        await client.query(deleteFromUser, deleteParams)

        await client.query('COMMIT;')

        res.status(200).json({ message: 'Expense successfully deleted' })
    } catch (err) {
        await client.query('ROLLBACK;')
        res.status(400).json({
            message: 'sorry, there was delete operation error',
        })

        console.error(err)
    } finally {
        client.release()
    }
}
