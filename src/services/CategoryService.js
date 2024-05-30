const Category = require('../models/Category')

class CategoryService {
    async createCategory(category) {
        return await Category.create(category)
    }

    async geAllCategories() {
        return await Category.findAll()
    }
}

const categoryService = new CategoryService()

module.exports = categoryService
