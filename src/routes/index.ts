const routes = require('express').Router()

import users from './users'
import expenses from './expenses'
import categories from './categories'

routes.use('/users', users)
routes.use('/expenses', expenses)
routes.use('/categories', categories)

export default routes
