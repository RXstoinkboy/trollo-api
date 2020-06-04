import Router from 'express'
import createCategory from './create-category'
import deleteCategory from './delete-category'
import updateCategory from './update-category'

const categories = Router()

categories.post('/', createCategory)
categories.delete('/', deleteCategory)
categories.put('/', updateCategory)

export default categories
