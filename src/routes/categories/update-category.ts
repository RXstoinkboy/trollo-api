import { Request, Response } from 'express'
import updateCategoryService from './controllers/update-category'

export default async function updateCategory(req: Request, res: Response) {
    const params = req.body

    try {
        await updateCategoryService(params)

        res.status(200).json({
            message: 'Update was successful',
        })
    } catch (err) {
        console.error(err)
        res.status(500).send('Sorry, we had inteneal error')
    }
}
