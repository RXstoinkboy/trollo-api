import { Request, Response } from 'express'
import db from '../../config/db'
import { QueryResult, Client } from 'pg'
import User from './interfaces/User.interface'

const getUserDataQuery: string = 'select * from users where public_id = $1;'
const updateQuery: string = `
    update users set
        password = $2
    where public_id = $1
    returning password;
`

export async function updatePassword(req: Request, res: Response) {
  const {
    public_id,
    password,
    repeat_password,
    new_password,
    repeat_new_password,
  } = req.body

  const client = await db.connect()

  try {
    let getUserParams: [string] = [public_id]
    const userQueryResult: QueryResult = await client.query(
      getUserDataQuery,
      getUserParams,
    )

    const {
      public_id: db_id,
      active: db_active,
      login: db_login,
      password: db_password,
    } = userQueryResult.rows[0]

    const user: User = {
      public_id: db_id,
      active: db_active,
      login: db_login,
      password: db_password,
    }
    console.log('user', user)
    // basic validation
    // TODO: reqork whole validation with JOI
    if (
      password === repeat_password &&
      password === user.password &&
      new_password === repeat_new_password
    ) {
      let updateParams: [string, string] = [public_id, new_password]
      const updateQueryResult: QueryResult = await db.query(
        updateQuery,
        updateParams,
      )

      const { password: confirmationPass } = updateQueryResult.rows[0]
      console.log(confirmationPass)

      // check if new password is really updated in db
      if (confirmationPass === new_password) {
        res.status(200).json({ message: 'Password update successful' })
      }
    }

    res.status(400).send('Credentials were not ok')
  } catch (err) {
    console.error(err)
    res.status(500).send('Sorry, we had an error on our side')
  } finally {
    client.release()
  }
}
