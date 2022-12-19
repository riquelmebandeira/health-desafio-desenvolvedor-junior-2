const express = require('express')
const cors = require('cors')
const path = require('path')
const petsRouter = require('./routes/pets')

const app = express()

app.set('views', './src/views')
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/../../react-components/dist')))

app.use(cors())
app.use(express.json())
app.use(petsRouter)

module.exports = app
