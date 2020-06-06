interface QueryParams {
    getExpenses: string
}
const query: QueryParams = {
    getExpenses: `select 
    users_expenses.user_id, 
    users_expenses.expense_id, 
    expenses.amount, 
    expenses.created_at as amount_create_at, 
    expenses.updated_at as amount_updated_at, 
    expenses_details.name as amount_name, 
    expenses_details.description as amount_description, 
    expenses_categories.category_id 
    
    from users_expenses
    
    left join expenses_categories on expenses_categories.expense_id = users_expenses.expense_id
    left join expenses on expenses.public_id = users_expenses.expense_id
    left join expenses_details on expenses_details.expense_id = users_expenses.expense_id
    
    where users_expenses.user_id = 'b3844a15-ef5f-4b5a-a880-24bd2a9d76db';
    `,
}

export default query
