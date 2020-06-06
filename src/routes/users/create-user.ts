import { Request, Response } from 'express'
import insertUser from './controllers/insert-user'
import Params from './interfaces/create-params.interface'

export async function createUser(req: Request, res: Response) {
    try {
        const params: Params = req.body

        const public_id = await insertUser(params)

        res.status(200).json({
            message: `User successfully craeted.`,
            public_id,
        })
    } catch (err) {
        console.error(err)
        res.status(400).json({ message: err.message })
    }
}
