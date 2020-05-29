import Router from 'express'
import createCategory from './createCategory'
import deleteCategory from './deleteCategory'
import updateCategory from './updateCategory'

const categories = Router()

categories.post('/', createCategory)
categories.delete('/', deleteCategory)
categories.put('/', updateCategory)

export default categories
