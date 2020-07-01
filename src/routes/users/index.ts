import Router from 'express'
import { createUser } from './create-user'
import { deleteUser } from './delete-user'
import { updatePassword } from './update-password'
import { updateUsername } from './update-username'
import passport from 'passport'

const users = Router()

users.post('/', createUser)
users.delete('/', passport.authenticate('jwt', { session: false }), deleteUser)
users.put('/password', passport.authenticate('jwt', { session: false }), updatePassword)
users.put('/username', passport.authenticate('jwt', { session: false }), updateUsername)

export default users
