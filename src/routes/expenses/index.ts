import Router from 'express'
import { addExpense } from './addExpense'
import { updateExpense } from './updateExpense'

const expenses = Router()

expenses.post('/', addExpense)
expenses.put('/', updateExpense)

export default expenses
