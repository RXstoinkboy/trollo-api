import { Request, Response } from 'express'
import db from '../../config/db'
import { QueryResult } from 'pg'
import UsernameCredentials from './interfaces/UsernameCredentials.interface'

// queries
const updateQuery: string = `
    update users set
        login = $2
    where public_id = $1
    returning login;
`

export async function updateUsername(req: Request, res: Response) {
    const {
        public_id,
        new_login,
        repeat_new_login,
    }: UsernameCredentials = req.body
    try {
        if (new_login === repeat_new_login) {
            let updateUsernameParams: [string, string] = [public_id, new_login]
            const updateUsernameResult: QueryResult = await db.query(
                updateQuery,
                updateUsernameParams,
            )
            const updatedLogin = updateUsernameResult.rows[0].login
            res.status(200).json({
                message: `Login updated to ${updatedLogin}`,
            })
        }
        if (new_login !== repeat_new_login)
            res.status(400).send('Provided logins should be the same')
        // res.status(400).send('Something went wrong')
    } catch (err) {
        console.error(err)
        res.status(500).send('We had trouble with updating your login')
    }
}
