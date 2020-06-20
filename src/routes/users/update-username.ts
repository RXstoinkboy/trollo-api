import { Request, Response } from 'express'
import updateUsernameService from './controllers/update-username'
import Params from './interfaces/update-username-params.interface'

export async function updateUsername(req: Request, res: Response) {
    const params: Params = req.body

    try {
        const isUpdateSuccessful = await updateUsernameService(params, req.user)

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
