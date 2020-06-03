import UpdateQuery from '../interfaces/update-query.interface'

const query: UpdateQuery = {
    amount:
        'update expenses set amount = coalesce($2, amount) where public_id = $1;',
    nameOrDesc:
        'update expenses_details set name = coalesce($2, name), description = coalesce($3, description) where expense_id = $1;',
}

export default query
