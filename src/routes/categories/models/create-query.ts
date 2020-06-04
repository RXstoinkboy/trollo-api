import CreateCategory from '../interfaces/create-query.interface'

const query: CreateCategory = {
    addCategory:
        'insert into categories (public_id, name) values ($1, $2) returning public_id, name;',
    addCategoryDetails:
        'insert into categories_details (category_id, description, color) values($1, $2, $3) returning description, color;',
    assignToUser: `insert into users_categories (user_id, category_id) values ($1, $2) returning user_id;`,
}

export default query
