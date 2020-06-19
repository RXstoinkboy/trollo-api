import Router from 'express'
import { createExpense } from './create-expense'
import { updateExpense } from './update-expense'
import { deleteExpense } from './delete-expense'
import { getExpenses } from './get-expenses'
import passport from 'passport'

const expenses = Router()

expenses.get('/', passport.authenticate('jwt', { session: false }), getExpenses)
expenses.post('/', createExpense)
expenses.put('/', updateExpense)
expenses.delete('/', deleteExpense)

export default expenses
