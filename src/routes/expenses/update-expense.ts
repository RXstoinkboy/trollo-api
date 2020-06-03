import { Request, Response } from 'express'
import updateExpenseService from './controllers/update-expense'

export async function updateExpense(req: Request, res: Response) {
    const params = req.body

    try {
        await updateExpenseService(params)
        res.status(200).json({ message: 'Expense successfully updated!' })
    } catch (err) {
        res.status(400).json({
            message: 'Sorry, something went wrong when updating expense',
            error: err,
        })
    }
}
