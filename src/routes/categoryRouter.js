const { Router } = require('express')
const categoryController = require('../controllers/CategoryController')

const categoryRouter = Router()
categoryRouter.get('/', categoryController.geAllCategories)
categoryRouter.post('/', categoryController.createCategory)
module.exports = categoryRouter
