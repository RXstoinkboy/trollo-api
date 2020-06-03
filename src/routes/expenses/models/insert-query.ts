import Query from '../interfaces/insert-query.interface'

const query: Query = {
    insertAmount: 'insert into expenses (public_id, amount) values ($1, $2);',
    insertDetails:
        'insert into expenses_details (expense_id, name, description) values ($1, $2, $3);',
    assignToUser:
        'insert into users_expenses (user_id, expense_id) values ($1, $2);',
    assignToCategory:
        'insert into expenses_categories (expense_id, category_id) values ($1, $2);',
}

export default query
