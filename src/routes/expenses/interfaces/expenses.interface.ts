export default interface Expenses {
    expenses: [Expense]
}

interface Expense {
    user_id: string
    expense_id: string
    expense_name: string
    expense_description: string
    amount: number
    amount_created_at: string
    amount_updated_at: string
    category_id: string
}
