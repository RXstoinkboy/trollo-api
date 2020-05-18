import db from '../index'

export const getUser = (req: any, res: any) => {
  const {
    params: { public_id },
  } = req

  db.query(
    'select * from users where public_id = $1',
    [public_id],
    (err, results) => {
      if (err) throw err
      res.status(200).json(results.rows)
    },
  )
}

export const createUser = (req: any, res: any) => {
  // TODO: appropriate password coding etc for security concerns ...
  // TODO: test creating new users
  const {
    body: { public_id, login, password_hash, password_salt },
  } = req

  db.query(
    'insert into users values($1, $2, $3, $4) returning public_id',
    [public_id, login, password_hash, password_salt],
    (err, results) => {
      if (err) throw err
      res.status(200).json({ message: 'user created', results })
    },
  )
}

// TODO:
// update user
// remove user
