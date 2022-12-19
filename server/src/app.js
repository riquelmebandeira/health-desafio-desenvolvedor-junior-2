const express = require('express')
const cors = require('cors')
const path = require('path')
const { Pet, Owner } = require('./database/models')

const app = express()

app.set('views', './src/views')
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/../../react-components/dist')))

app.use(cors())
app.use(express.json())

app.get('/pets', async (req, res) => {
  const pets = await Pet.findAll()
  res.render('home', { pets })
})

app.get('/pets/:id', async (req, res) => {
  const petDetails = await Pet.findOne({
    where: { id: req.params.id },
    include: { model: Owner, as: 'owner' }
  })
  res.render('details', { petDetails })
})

module.exports = app
