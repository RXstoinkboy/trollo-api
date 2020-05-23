import { Request, Response } from 'express'
import db from '../../config/db'
import { Expense, GetQueries } from './interfaces/Expense.interface'

export async function getExpenseDetails(req: Request, res: Response) {
  const { expense_id } = req.params

  const client = await db.connect()

  try {
    await client.query('BEGIN;')

    // db queries
    const get: GetQueries = {
      expenses:
        'select amount, created_at, updated_at from expenses where public_id = $1;',
      expensesDetails:
        'select name, description from expenses_details where expense_id = $1;',
      expensesCategories:
        'select category_id from expenses_categories where expense_id = $1;',
      categoryName: 'select name from categories where public_id = $1',
    }

    // params used to contact "expenses" tables
    let expensesParams: [string] = [expense_id]

    // get data about expense from db
    const amountCreatedUpdateResults = await client.query(
      get.expenses,
      expensesParams,
    )
    const nameDescResults = await client.query(
      get.expensesDetails,
      expensesParams,
    )
    const categoryIdResults = await client.query(
      get.expensesCategories,
      expensesParams,
    )

    // extract data from object received from db
    const {
      amount,
      created_at,
      updated_at,
    } = amountCreatedUpdateResults.rows[0]
    const { name, description } = nameDescResults.rows[0]

    // contruct resulting 'expense' object
    const expense: Expense = {
      public_id: expense_id,
      amount,
      name,
      description,
      categoryId: undefined,
      category: undefined,
      created_at,
      updated_at,
    }

    console.log(expense)

    // get category name
    if (categoryIdResults.rowCount) {
      const categoryId: string = categoryIdResults.rows[0].category_id
      let categoriesParams: [string] = [categoryId]

      const categoriesResults = await client.query(
        get.categoryName,
        categoriesParams,
      )
      const { name: category } = categoriesResults.rows[0]

      // assign category data to expense object
      expense.categoryId = categoryId
      expense.category = category
    }

    await client.query('COMMIT;')

    res.status(200).json(expense)
  } catch (err) {
    await client.query('ROLLBACK;')

    res.status(400).json({ message: 'Error while getting data about expense' })
    console.error(err)
  } finally {
    client.release()
  }
}
