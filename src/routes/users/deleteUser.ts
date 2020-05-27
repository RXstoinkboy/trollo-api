import { Request, Response } from 'express'
import db from '../../config/db'
import { v4 as uuid } from 'uuid'
import { QueryResult } from 'pg'
import DeleteConfirmation from './interfaces/DeleteConfirmation.interface'

const deleteQuery = `
    update users set
        active = false
    where public_id = $1
    returning public_id, active;`

export async function deleteUser(req: Request, res: Response) {
  const { public_id } = req.body

  try {
    let deleteParams: [string] = [public_id]

    const queryResult: QueryResult = await db.query(deleteQuery, deleteParams)
    console.log(queryResult.rows[0])
    const deleteConfirmation: DeleteConfirmation = {
      id: queryResult.rows[0].public_id,
      active: queryResult.rows[0].active,
    }

    res.status(200).json({
      message: `User id: ${deleteConfirmation.id}, deleted, status: ${
        !deleteConfirmation.active ? 'DELETED' : 'ERROR'
      }`,
    })
  } catch (err) {
    console.error(err)
    res.status(500).send('Sorry, we had a problem with deleting user')
  }
}
