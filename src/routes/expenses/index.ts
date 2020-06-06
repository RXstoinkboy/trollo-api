import Router from 'express'
import { createExpense } from './create-expense'
import { updateExpense } from './update-expense'
import { deleteExpense } from './delete-expense'
import { getExpenseDetails } from './get-expenses'

const expenses = Router()

expenses.get('/', getExpenseDetails)
expenses.post('/', createExpense)
expenses.put('/', updateExpense)
expenses.delete('/', deleteExpense)

export default expenses
