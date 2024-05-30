const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('api_node', 'tranvansi', 'tranvansi', {
    logging: false,
    host: 'localhost',
    port: 3307,
    dialect: 'mysql'
})

module.exports = sequelize
