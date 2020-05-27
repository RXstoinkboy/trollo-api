import { Request, Response } from 'express'
import db from '../../config/db'
import { v4 as uuid } from 'uuid'
import { QueryResult } from 'pg'

const insertQuery: string =
  'INSERT INTO users (public_id, login, password) values ($1, $2, $3) returning public_id;'
const public_id: string = uuid()

export async function createUser(req: Request, res: Response) {
  try {
    const { login, password } = req.body

    let insertParams: [string, string, string] = [public_id, login, password]
    const queryResult: QueryResult = await db.query(insertQuery, insertParams)

    const idConfirmarion: string = queryResult.rows[0].public_id

    res.status(200).json({
      message: `User successfully craeterd with id: ${idConfirmarion}`,
    })
  } catch (err) {
    console.error(err)
    res.status(500).send('Sorry we encountered server error...')
  }
}
