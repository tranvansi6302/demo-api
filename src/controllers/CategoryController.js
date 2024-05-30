const categoryService = require('../services/CategoryService')

class CategoryController {
    async createCategory(req, res) {
        const category = req.body
        const categoryCreated = await categoryService.createCategory(category)
        res.status(201).json(categoryCreated)
    }

    async geAllCategories(req, res) {
        const categories = await categoryService.geAllCategories()
        res.status(200).json(categories)
    }
}

const categoryController = new CategoryController()
module.exports = categoryController
