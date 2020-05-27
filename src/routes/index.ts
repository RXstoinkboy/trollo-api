const routes = require('express').Router()

// import users from './users'
import users from './users'
import expenses from './expenses'
import categories from './categories'
// routes.get('/', (req: any, res: any) => {
//   res.status(200).json({ message: 'Connected!' })
// })
// routes.use('/users', users)
routes.use('/users', users)
routes.use('/expenses', expenses)
routes.use('/categories', categories)

export default routes
