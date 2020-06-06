import CreateCategory from '../interfaces/create-query.interface'

const query: CreateCategory = {
    addCategory:
        'insert into categories (public_id, name, ui_position) values ($1, $2, $3);',
    addCategoryDetails:
        'insert into categories_details (category_id, description, color) values($1, $2, $3);',
    assignToUser: `insert into users_categories (user_id, category_id) values ($1, $2);`,
}

export default query
