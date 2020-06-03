import Query from '../interfaces/update-query.interface'

const query: Query = {
    categories: `
    update categories set
        name = coalesce($2, name)
    where public_id = $1;
`,
    categoriesDetails: `
    update categories_details set
        description = coalesce($2, description),
        color = coalesce($3, color)
    where category_id = $1;
`,
    insertDetails: `
    insert into categories_details
        (category_id, description, color)
    values ($1, $2, $3);
`,
    usersCategories: `
    update users_categories set
        user_id = coalesce($2, user_id)
    where category_id = $1;
`,
}

export default query
