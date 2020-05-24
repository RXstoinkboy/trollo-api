import { Request, Response } from 'express'
import db from '../../config/db'
import { v4 as uuid } from 'uuid'
import { deserialize } from 'v8'

type CreateCategory = {
  name: string
  description?: string
  color?: string
}

export default async function createCategory(req: Request, res: Response) {
  const { name, description, color }: CreateCategory = req.body
  const public_id: string = uuid()

  const client = await db.connect()

  try {
    await client.query('BEGIN;')

    const addCategory: string =
      'insert into categories (public_id, name) values ($1, $2);'
    const addCategoryDetails: string =
      'insert into categories_details (public_id, name, color) values($1, $2, $3);'

    const CategoryParams: [string, string] = [public_id, name]
    const CategoryDetailsParams: [string, string?, string?] = [
      public_id,
      description,
      color,
    ]

    await client.query(addCategory, CategoryParams)

    if (description || color) {
      await client.query(addCategoryDetails, CategoryDetailsParams)
    }

    // TODO: jeszcze trzeba przypisać do usera

    await client.query('COMMIT;')

    res.status(200).json({ message: 'Category successfully created' })
  } catch (err) {
    await client.query('ROLLBACK;')
    res
      .status(400)
      .json({ message: 'Sorry, there was an error while creating category.' })

    console.error(err)
  } finally {
    client.release()
  }
}
