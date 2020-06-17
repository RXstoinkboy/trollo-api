const routes = require('express').Router()

import users from './users'
import expenses from './expenses'
import categories from './categories'
import auth from './auth'

routes.use('/users', users)
routes.use('/expenses', expenses)
routes.use('/categories', categories)
routes.use('/auth', auth)

export default routes
