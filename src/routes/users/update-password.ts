import { Request, Response } from 'express'
import updatePasswordService from './controllers/update-password'
import Params from './interfaces/update-password-params.interface'

export async function updatePassword(req: Request, res: Response) {
    const params: Params = req.body

    try {
        const isUpdateSuccessful = await updatePasswordService(params)

        if (isUpdateSuccessful)
            res.status(200).json({ message: 'Password updated successfully.' })

        res.status(300).json({
            message:
                'New password was not the same as "repeat new password" field data.',
        })
    } catch (err) {
        console.error(err)
        res.status(400).json({ message: err.message })
    }
}