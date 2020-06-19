import { Request, Response } from 'express'
import db from '../../config/db'
import getExpensesService from './controllers/get-expenses'

export async function getExpenses(req: Request, res: Response) {
    try {
        const expenses = await getExpensesService(req.user)

        res.status(200).json(expenses)
    } catch (err) {
        res.status(400).json({
            message: 'Error while getting data about expense',
        })
        console.error(err)
    }
}
