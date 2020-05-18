import Router from 'express'
import db, { getAllUsers } from '../../config/db'

const users = Router()

users.get('/', (req: any, res: any) => {
  res.status(200).json({ message: 'hello from users' })
})

users.get('/all', getAllUsers)

export default users
