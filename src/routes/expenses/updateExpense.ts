import { Request, Response } from 'express'
import db from '../../config/db'
import { UpdateExpense } from './interfaces/UpdateExpense.interface'
import { QueryResult } from 'pg'

export async function updateExpense(req: Request, res: Response) {
  const { public_id, amount, name, description }: UpdateExpense = req.body

  const client = await db.connect()

  const amountQuery: string = `
        update expenses set
        amount = $2
        where public_id = $1
        returning amount;
    `
  const nameOrDesc: string = `
          update expenses_details set
          name = $2,
          description = $3
          where expense_id = $1
          returning name, description;
      `

  try {
    await client.query('BEGIN;')

    if (amount) {
      let ExpenseParams: [string, number] = [public_id, amount]

      const queryResult: QueryResult = await client.query(
        amountQuery,
        ExpenseParams,
      )
      // extract data
      const newAmount: number = queryResult.rows[0].amount

      //   double check if new data from DB is the same as the one which we wanted to update
      if (newAmount !== amount)
        res.status(400).send('Amount update went wrong...')
    }

    if (name || description) {
      let DetailsParams: [string, string?, string?] = [
        public_id,
        name,
        description,
      ]

      const queryResult: QueryResult = await client.query(
        nameOrDesc,
        DetailsParams,
      )
      // extract data
      const newName: string = queryResult.rows[0].name
      const newDesc: string = queryResult.rows[0].description

      //   double check if new data from DB is the same as the one which we wanted to update
      if (name !== newName || description !== newDesc)
        res.status(400).send('Details update wend wrong')
    }

    client.query('COMMIT;')

    res.status(200).json({ message: 'Expense successfully updated!' })
  } catch (err) {
    res
      .status(400)
      .json({ message: 'Sorry, something went wrong when updating expense' })

    console.error(err)
  } finally {
    client.release()
  }
}
