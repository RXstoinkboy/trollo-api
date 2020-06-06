interface QueryParams {
    getCategories: string
}

const query: QueryParams = {
    getCategories: `select 
    users_categories.user_id,
    users_categories.category_id,
    categories.name as category_name,
    categories.created_at as category_created_at,
    categories.ui_position as category_ui_position,
    categories_details.description as category_description,
    categories_details.color as category_color
    
    from users_categories
    
    left join categories on categories.public_id = users_categories.category_id
    left join categories_details on categories_details.category_id = users_categories.category_id
    
    where users_categories.user_id = 'b3844a15-ef5f-4b5a-a880-24bd2a9d76db';
    `,
}

export default query
