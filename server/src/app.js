const express = require('express')
const cors = require('cors')
// const path = require('path')
const { Pet } = require('./database/models')

const app = express()

app.set('views', './src/views')
app.set('view engine', 'ejs')
app.use(express.static('dist'))

app.use(cors())
app.use(express.json())

app.get('/home', async (req, res) => {
  const pets = await Pet.findAll()
  res.render('home', { pets })
})

module.exports = app
