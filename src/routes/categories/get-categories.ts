import { Request, Response } from 'express'
import db from '../../config/db'
import Params from './interfaces/get-categories-params.interface'
import getCategoriesService from './controllers/get-categories'

export default async function getCategories(req: Request, res: Response) {
    const params: Params = req.body
    try {
        const categories = await getCategoriesService(params)

        res.status(200).json(categories)
    } catch (err) {
        res.status(400).json({
            message: 'Error while getting data about categories',
        })
        console.error(err)
    }
}
