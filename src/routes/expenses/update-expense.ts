import { Request, Response } from 'express'
import updateExpenseService from './controllers/update-expense'
import Params from './interfaces/update-params.interface'

export async function updateExpense(req: Request, res: Response) {
    const params: Params = req.body

    try {
        await updateExpenseService(params)
        res.status(200).json({ message: 'Expense successfully updated!' })
    } catch (err) {
        res.status(400).json({
            message: err.message,
        })
    }
}
