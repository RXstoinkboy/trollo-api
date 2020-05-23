import Router from 'express'
import { addExpense } from './addExpense'
import { updateExpense } from './updateExpense'
import { deleteExpense } from './deleteExpense'
import { getExpenseDetails } from './getExpenseDetails'

const expenses = Router()

expenses.get('/:expense_id', getExpenseDetails)
expenses.post('/', addExpense)
expenses.put('/', updateExpense)
expenses.delete('/', deleteExpense)

export default expenses
