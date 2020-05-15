import { Router } from 'express'
import db from '../models/db'

const router = new Router()

router.get('/', (req, res) => {
  res.send('Hello from router path "/"')
})

router.get('/db', async (req, res) => {
  const atm = await db.query('SELECT now()')
  console.log('db działa. Jest teraz ', atm)
})

export default router
