import { Request, Response } from 'express'
import deleteExpenseService from './controllers/delete-expense'

export async function deleteExpense(req: Request, res: Response) {
    const params = req.body

    try {
        await deleteExpenseService(params)
        res.status(200).json({ message: 'Expense successfully deleted' })
    } catch (err) {
        res.status(400).json({
            message: err.message,
        })
    }
}
