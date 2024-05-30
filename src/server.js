const express = require('express')
const sequelize = require('./configs/connect')
const categoryRouter = require('./routes/categoryRouter')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

const connectToMysql = async () => {
    try {
        await sequelize.authenticate()
        sequelize.sync()
        console.log('Connected mysql successfully')
    } catch (err) {
        console.log(err)
    }
}
connectToMysql()

require('./models')

app.use('/api/v1/categories', categoryRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
