import { Response, Request } from 'express'
import deleteCategoryService from './controllers/delete-category'

export default async function deleteCategory(req: Request, res: Response) {
    const params = req.body

    try {
        await deleteCategoryService(params)

        res.status(200).json({ message: 'Category successfully deleted.' })
    } catch (err) {
        res.status(400).json({
            message: err.message,
        })
    }
}
