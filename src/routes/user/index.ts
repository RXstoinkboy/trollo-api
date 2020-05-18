import Router from 'express'
import { getUser } from '../../config/db/queries/user'

const user = Router()

user.get('/:public_id', getUser)

export default user
