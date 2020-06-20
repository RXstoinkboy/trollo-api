import { Request, Response } from 'express'
import deleteUserService from './controllers/delete-user'

export async function deleteUser(req: Request, res: Response) {
    try {
        const deleteConfirmation = await deleteUserService(req.user)

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
