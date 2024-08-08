const express = require('express')
const router = express.Router()
const Character = require('../models/Character')

// todos los personajes
router.get('/', async (req, res) => {
  try {
    const characters = await Character.find().populate('movie')
    res.json(characters)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching characters' })
  }
})

// Se creará un nuevo personaje
router.post('/', async (req, res) => {
  const { name, movie } = req.body
  const newCharacter = new Character({ name, movie })
  try {
    const savedCharacter = await newCharacter.save()
    res.status(201).json(savedCharacter)
  } catch (error) {
    res.status(500).json({ message: 'Error creating character' })
  }
})

// Actualizar un personaje por  SU ID
router.put('/:id', async (req, res) => {
  const { name, movie } = req.body
  try {
    const updatedCharacter = await Character.findByIdAndUpdate(
      req.params.id,
      { name, movie },
      { new: true }
    )
    res.json(updatedCharacter)
  } catch (error) {
    res.status(500).json({ message: 'Error updating character' })
  }
})

// Eliminar un personaje por ID
router.delete('/:id', async (req, res) => {
  try {
    await Character.findByIdAndDelete(req.params.id)
    res.json({ message: 'Character deleted' })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting character' })
  }
})

module.exports = router
