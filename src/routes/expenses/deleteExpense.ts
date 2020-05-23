import { Request, Response } from 'express'
import db from '../../config/db'
import { DeleteExpense } from './interfaces/DeleteExpense.interface'

export async function deleteExpense(req: Request, res: Response) {
  const { expense_id }: DeleteExpense = req.body

  const client = await db.connect()

  try {
    await client.query('BEGIN;')

    const deleteExpenseQuery: string =
      'delete from expenses where public_id = $1;'
    const deleteDetailsQuery: string =
      'delete from expenses_details where expense_id = $1;'

    let DeleteParams: [string] = [expense_id]
    let DeleteDetailsParams: [string] = [expense_id]

    await client.query(deleteExpenseQuery, DeleteParams)
    await client.query(deleteDetailsQuery, DeleteDetailsParams)

    await client.query('COMMIT;')

    res.status(200).json({ message: 'Expense successfully deleted' })
  } catch (err) {
    await client.query('ROLLBACK;')
    res.status(400).json({ message: 'sorry, there was delete operation error' })

    console.error(err)
  } finally {
    client.release()
  }
}
