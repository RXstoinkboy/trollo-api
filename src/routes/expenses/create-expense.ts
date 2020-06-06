import { Request, Response } from 'express'
import insertExpense from './controllers/insert-expense'
import Params from './interfaces/create-params.interface'

export async function createExpense(req: Request, res: Response) {
    const params: Params = req.body // get data from request body

    try {
        const public_id = await insertExpense(params)
        res.status(200).json({
            message: 'Expense added to the system',
            public_id,
        })
    } catch (err) {
        res.status(400).json({
            message: err.message,
        })

        //   TODO: improve error handling
    }
}
