import Router from 'express'
import { createUser } from './createUser'
import { deleteUser } from './deleteUser'
import { updatePassword } from './updatePassword'
import { updateUsername } from './updateUsername'

const users = Router()

users.post('/', createUser)
users.delete('/', deleteUser)
users.put('/password', updatePassword)
users.put('/username', updateUsername)

export default users
