import { Request, Response } from 'express'
import insertExpense from './controllers/insert-expense'

type Params = {
    amount: number
    name: string
    description: string
    category: string
    user: string
}

export async function createExpense(req: Request, res: Response) {
    const params: Params = req.body // get data from request body

    try {
        await insertExpense(params)
        res.status(200).json({
            message: 'Expense added to the system',
        })
    } catch (err) {
        res.status(400).json({
            message: 'there is unspeciffied error in expense adding',
        })

        //   TODO: improve error handling
    }
}
