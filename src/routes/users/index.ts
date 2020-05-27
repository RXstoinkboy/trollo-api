import Router from 'express'
import { createUser } from './createUser'
import { deleteUser } from './deleteUser'
import { updatePassword } from './updatePassword'

const users = Router()

users.post('/', createUser)
users.delete('/', deleteUser)
users.put('/password', updatePassword)

export default users
