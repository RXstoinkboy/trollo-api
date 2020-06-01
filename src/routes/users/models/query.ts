import Query from '../interfaces/query.interface'

const query: Query = {
    insertUser:
        'INSERT INTO users (public_id, login, password) values ($1, $2, $3) returning public_id;',
    deleteUser:
        'update users set active = false where public_id = $1 returning public_id, active;',
}

export default query
