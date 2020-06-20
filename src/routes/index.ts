const routes = require('express').Router()

import users from './users'
import expenses from './expenses'
import categories from './categories'
import auth from './auth'
import passport from 'passport'

routes.use('/users', passport.authenticate('jwt', { session: false }), users)
routes.use('/expenses', passport.authenticate('jwt', { session: false }), expenses)
routes.use('/categories', passport.authenticate('jwt', { session: false }), categories)
routes.use('/auth', auth)

export default routes
