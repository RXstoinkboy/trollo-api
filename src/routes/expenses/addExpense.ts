import db from '../../config/db'
import uniqid from 'uniqid'

export const addExpense = async (req: any, res: any) => {
  const { amount, name, description } = req.body // get data from request body
  const public_id = uniqid('expense-') // generate unique ID for expense

  const client = await db.connect() // open connection with DB

  try {
    await client.query('BEGIN;') // start transaction
    // default query to insert at least amount spent
    const insertAmountQuery =
      'insert into expenses (public_id, amount) values ($1, $2) returning id;'
    await client.query(insertAmountQuery, [public_id, amount])

    // add expense name if provided
    if (name && !description) {
      const insertName =
        'insert into expenses_details (expense_id, name) values ($1, $2) returning id;'
      await client.query(insertName, [public_id, name])
    }

    // add expense description if provided
    if (name && !description) {
      const insertDescription =
        'insert into expenses_details (expense_id, name) values ($1, $2) returning id;'
      await client.query(insertDescription, [public_id, description])
    }

    // add expense name and description if provided
    if (name && description) {
      const insertDescription =
        'insert into expenses_details (expense_id, name, description) values ($1, $2, $3) returning id;'
      await client.query(insertDescription, [public_id, name, description])
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
