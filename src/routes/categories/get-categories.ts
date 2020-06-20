import { Request, Response } from 'express'
import db from '../../config/db'
import Params from './interfaces/get-categories-params.interface'
import getCategoriesService from './controllers/get-categories'

export default async function getCategories(req: Request, res: Response) {
    try {
        const categories = await getCategoriesService(req.user)

        res.status(200).json(categories)
    } catch (err) {
        res.status(400).json({
            message: 'Error while getting data about categories',
        })
        console.error(err)
    }
}
