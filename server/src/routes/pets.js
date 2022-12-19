const { Router } = require('express')
const { Pet, Owner } = require('../database/models')

const router = Router()

router.get('/pets', async (req, res) => {
  const pets = await Pet.findAll()
  res.render('home', { pets })
})

router.get('/pets/:id', async (req, res) => {
  const petDetails = await Pet.findOne({
    where: { id: req.params.id },
    include: { model: Owner, as: 'owner' }
  })
  res.render('details', { petDetails })
})

router.delete('/pets/:id', async (req, res) => {
  const { id } = req.params
  const pet = await Pet.findOne({ where: { id } })
  if (!pet) {
    return res.status(404).json({ message: 'Este pet não existe.' })
  }
  pet.destroy()
  return res.status(200).json({ message: 'Pet deletado com sucesso.' })
})

module.exports = router
