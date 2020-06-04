import DeleteQuery from '../interfaces/delete-query.interface'

const query: DeleteQuery = {
    deleteCategory: 'delete from categories where public_id = $1;',
    deleteUsersCategory: 'delete from users_categories where category_id = $1;',
    deleteCategoryDetails:
        'delete from categories_details where category_id = $1;',
    deleteExpensesCategories:
        'delete from expenses_categories where category_id = $1;',
}

export default query
