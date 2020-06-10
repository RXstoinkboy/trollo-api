interface QueryParams {
    getExpenses: string
}
const query: QueryParams = {
    getExpenses: `select 
    users_expenses.user_id, 
    users_expenses.expense_id, 
    expenses.amount, 
    expenses_details.name as expense_name, 
    expenses_details.description as expense_description, 
    expenses.created_at as amount_created_at, 
    expenses.updated_at as amount_updated_at, 
    expenses_categories.category_id 
    
    from users_expenses
    
    left join expenses_categories on expenses_categories.expense_id = users_expenses.expense_id
    left join expenses on expenses.public_id = users_expenses.expense_id
    left join expenses_details on expenses_details.expense_id = users_expenses.expense_id
    
    where users_expenses.user_id = $1;
    `,
}

export default query

/**
 * test query to find an expense altogether with details about its category
 */
// select
//     users_expenses.user_id,
//     users_expenses.expense_id,
//     expenses.amount,
//     expenses.created_at as amount_create_at,
//     expenses.updated_at as amount_updated_at,
//     expenses_details.name as amount_name,
//     expenses_details.description as amount_description,
//     expenses_categories.category_id,
// 	cats.category_name,
// 	cats.category_ui_position

//     from users_expenses

//     left join expenses_categories on expenses_categories.expense_id = users_expenses.expense_id
//     left join expenses on expenses.public_id = users_expenses.expense_id
//     left join expenses_details on expenses_details.expense_id = users_expenses.expense_id
// 	left join (
// 		select
// 			users_categories.user_id,
// 			users_categories.category_id as cat_id,
// 			categories.name as category_name,
// 			categories.created_at as category_created_at,
// 			categories.ui_position as category_ui_position,
// 			categories_details.description as category_description,
// 			categories_details.color as category_color

// 			from users_categories

// 			left join categories on categories.public_id = users_categories.category_id
// 			left join categories_details on categories_details.category_id = users_categories.category_id
// 	) as cats
// 	on cats.cat_id = expenses_categories.category_id

//     where users_expenses.user_id = 'test_public_id';
