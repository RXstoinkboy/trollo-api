import { Request, Response } from 'express'
import db from '../../config/db'
import { v4 as uuid } from 'uuid'
import { AddExpense } from './interfaces/AddExpense.interface'

export async function addExpense(req: Request, res: Response) {
  const { amount, name, description }: AddExpense = req.body // get data from request body
  const public_id: string = uuid() // generate unique ID for expense

  const client = await db.connect() // open connection with DB

  const insertAmountQuery: string =
    'insert into expenses (public_id, amount) values ($1, $2) returning id;'
  const insertDetails: string =
    'insert into expenses_details (expense_id, name, description) values ($1, $2, $3) returning id;'

  try {
    await client.query('BEGIN;') // start transaction
    // default query to insert at least amount spent

    let AmountParams: [string, number] = [public_id, amount]

    await client.query(insertAmountQuery, AmountParams)

    // if there are any details added when inserting them put them into db too
    if (name || description) {
      let DetailsParams: [string, string?, string?] = [
        public_id,
        name,
        description,
      ]

      await client.query(insertDetails, DetailsParams)
    }

    await client.query('COMMIT;') // finish transaction

    res.status(200).json({ message: 'Expense added to the system' })
  } catch (err) {
    await client.query('ROLLBACK;')
    res
      .status(400)
      .json({ message: 'there is unspeciffied error in expense adding' })

    //   TODO: improve error handling
    console.error(err)
  } finally {
    client.release() // temrinate client connection to DB
  }
}
