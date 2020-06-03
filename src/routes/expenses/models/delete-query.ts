import DeleteQuery from '../interfaces/delete-query.interface'
const query: DeleteQuery = {
    deleteExpense: 'delete from expenses where public_id = $1;',
    deleteDetails: 'delete from expenses_details where expense_id = $1;',
    deleteFromCategory: `delete from expenses_categories where expense_id = $1;`,
    deleteFromUser: `delete from users_expenses where expense_id = $1;`,
}

export default query
