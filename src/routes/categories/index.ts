import Router from 'express'
import createCategory from './createCategory'

const categories = Router()

categories.post('/', createCategory)

export default categories
