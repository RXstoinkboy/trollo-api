import db from '../index'

export const getAllUsers = (req: any, res: any) => {
  db.query('select * from users;', (err, results) => {
    if (err) throw err
    res.status(200).json(results.rows)
  })
}
