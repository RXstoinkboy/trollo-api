import { Request, Response } from 'express'
import deleteUserService from './controllers/delete-user'
import Params from './interfaces/delete-params.interface'

export async function deleteUser(req: Request, res: Response) {
    const params: Params = req.body

    try {
        const deleteConfirmation = await deleteUserService(params)

        res.status(200).json({
            message: `User id: ${deleteConfirmation.id}, deleted, status: ${
                !deleteConfirmation.active ? 'DELETED' : 'ERROR'
            }`,
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: err.message })
    }
}
