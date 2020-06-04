import { Request, Response } from 'express'
import deleteUserService from './controllers/delete-user'

type Params = {
    public_id: string
}

export async function deleteUser(req: Request, res: Response) {
    const { public_id }: Params = req.body

    try {
        const deleteConfirmation = await deleteUserService(public_id)

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
