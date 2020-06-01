import { Request, Response } from 'express'
import db from '../../config/db'
import query from './models/query'
import { QueryResult } from 'pg'
import User from './interfaces/User.interface'
import Credentials from './interfaces/Credentials.interface'

type Params = {
    public_id: string
    password: string
    repeat_password: string
    new_password: string
    repeat_new_password: string
}

export async function updatePassword(req: Request, res: Response) {
    const {
        public_id,
        password,
        repeat_password,
        new_password,
        repeat_new_password,
    }: Params = req.body

    const client = await db.connect()

    try {
        await client.query('BEGIN;')

        let getUserParams: [string] = [public_id]
        const userQueryResult: QueryResult = await client.query(
            query.getUserData,
            getUserParams,
        )

        const {
            public_id: db_id,
            active: db_active,
            login: db_login,
            password: db_password,
        }: User = userQueryResult.rows[0]

        // basic validation
        // TODO: reqork whole validation with JOI
        if (
            password === repeat_password &&
            password === db_password &&
            new_password === repeat_new_password
        ) {
            let updateParams: [string, string] = [public_id, new_password]
            const updateQueryResult: QueryResult = await db.query(
                query.updateUser,
                updateParams,
            )

            const { password: confirmationPass } = updateQueryResult.rows[0]
            console.log(confirmationPass)

            await client.query('COMMIT;')
            // check if new password is really updated in db
            if (confirmationPass === new_password) {
                res.status(200).json({
                    message: 'Password updated successfully',
                })
            }

            res.status(400).json({ message: 'Something went wrong' })
        } else {
            await client.query('COMMIT;')
            res.status(400).json({ message: 'Credentials were not ok' })
        }
    } catch (err) {
        console.error(err)
        await client.query('ROLLBACK;')

        res.status(500).send('Sorry, we had an error on our side')
    } finally {
        client.release()
    }
}
