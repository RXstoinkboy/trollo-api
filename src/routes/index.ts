const routes = require('express').Router()

// import users from './users'
// import user from './user'
import expenses from './expenses'

// routes.get('/', (req: any, res: any) => {
//   res.status(200).json({ message: 'Connected!' })
// })
// routes.use('/users', users)
// routes.use('/user', user)
routes.use('/expenses', expenses)

export default routes
