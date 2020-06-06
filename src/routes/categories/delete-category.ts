import { Response, Request } from 'express'
import deleteCategoryService from './controllers/delete-category'
import Params from './interfaces/delete-params.interface'

export default async function deleteCategory(req: Request, res: Response) {
    const params: Params = req.body

    try {
        await deleteCategoryService(params)

        res.status(200).json({ message: 'Category successfully deleted.' })
    } catch (err) {
        res.status(400).json({
            message: err.message,
        })
    }
}
