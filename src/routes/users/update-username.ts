import { Request, Response } from 'express'
import updateUsernameService from './controllers/update-username'

type Params = {
    public_id: string
    new_login: string
    repeat_new_login: string
}

export async function updateUsername(req: Request, res: Response) {
    const params: Params = req.body

    try {
        const isUpdateSuccessful = await updateUsernameService(params)

        if (isUpdateSuccessful) {
            res.status(200).json({
                message: `Login updated to ${params.new_login}`,
            })
        }

        res.status(300).send('Login and "repeat new login" should be the same.')
    } catch (err) {
        console.error(err)
        res.status(400).send('Error while updating username. Please try again.')
    }
}
