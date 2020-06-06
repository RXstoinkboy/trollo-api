import { Request, Response } from 'express'
import createCategoryService from './controllers/create-category'
import Params from './interfaces/create-params.interface'

export default async function createCategory(req: Request, res: Response) {
    const params: Params = req.body

    try {
        const public_id = await createCategoryService(params)

        res.status(200).json({
            message: 'Category successfully created',
            public_id,
        })
    } catch (err) {
        res.status(400).json({
            message: err.message,
        })
    }
}
