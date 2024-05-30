const { DataTypes } = require('sequelize')
const sequelize = require('../configs/connect')
const Category = require('./Category')

const Product = sequelize.define(
    'Product',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Category,
                key: 'id'
            }
        }
    },
    {
        tableName: 'products'
    }
)

module.exports = Product
