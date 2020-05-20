import Router from 'express'
import { addExpense } from './addExpense'

const expenses = Router()

expenses.post('/', addExpense)

export default expenses
