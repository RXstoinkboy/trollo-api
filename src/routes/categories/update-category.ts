import { Request, Response } from 'express'
import updateCategoryService from './controllers/update-category'
import Params from './interfaces/update-params.interface'

export default async function updateCategory(req: Request, res: Response) {
    const params: Params = req.body

    try {
        await updateCategoryService(params, req.user)

        res.status(200).json({
            message: 'Update was successful',
        })
    } catch (err) {
        console.error(err)
        res.status(400).json({ message: err.message })
    }
}
