import { Request, Response } from 'express'
import updatePasswordService from './controllers/update-password'
import Params from './interfaces/update-password-params.interface'

export async function updatePassword(req: Request, res: Response) {
    const params: Params = req.body

    try {
        await updatePasswordService(params)

        res.status(200).json({ message: 'Password updated successfully.' })
    } catch (err) {
        console.error(err)
        res.status(400).json({ message: err.message })
    }
}
