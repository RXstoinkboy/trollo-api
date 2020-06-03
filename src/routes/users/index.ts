import Router from 'express'
import { createUser } from './create-user'
import { deleteUser } from './delete-user'
import { updatePassword } from './update-password'
import { updateUsername } from './update-username'

const users = Router()

users.post('/', createUser)
users.delete('/', deleteUser)
users.put('/password', updatePassword)
users.put('/username', updateUsername)

export default users
