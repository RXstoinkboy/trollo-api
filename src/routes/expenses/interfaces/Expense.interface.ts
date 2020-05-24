export interface Expense {
  public_id: string
  amount: number
  name: string
  description: string | null
  categoryId: string | null
  category: string | null
  created_at: string
  updated_at: string
}

export interface GetQueries {
  expenses: string
  expensesDetails: string
  expensesCategories: string
  categoryName: string
}
