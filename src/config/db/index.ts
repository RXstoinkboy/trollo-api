import { Pool } from 'pg'

const db = new Pool()

export const getAllUsers = (req: any, res: any) => {
  db.query('select * from users;', (err, results) => {
    if (err) throw err
    res.status(200).json(results)
  })
}

export default db
