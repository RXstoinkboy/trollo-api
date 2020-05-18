const routes = require('express').Router()
import users from './users'

routes.get('/', (req: any, res: any) => {
  res.status(200).json({ message: 'Connected!' })
})
routes.use('/users', users)

export default routes
