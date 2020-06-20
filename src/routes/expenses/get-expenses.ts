import { Request, Response } from 'express'
import db from '../../config/db'
import getExpensesService from './controllers/get-expenses'
import Params from './interfaces/get-expenses-params.interface'

export async function getExpenses(req: Request, res: Response) {
    const params: Params | any = req.user
    try {
        const expenses = await getExpensesService(params)

        res.status(200).json(expenses)
    } catch (err) {
        res.status(400).json({
            message: 'Error while getting data about expense',
        })
        console.error(err)
    }
}
