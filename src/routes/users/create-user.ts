import { Request, Response } from 'express'
import insertUser from './controllers/insert-user'

type Params = {
    login: string
    password: string
}

export async function createUser(req: Request, res: Response) {
    try {
        const params: Params = req.body

        const idConfirmarion = await insertUser(params)

        res.status(200).json({
            message: `User successfully craeted with id: ${idConfirmarion}`,
        })
    } catch (err) {
        console.error(err)
        res.status(400).send('Sorry we encountered server error...')
    }
}
