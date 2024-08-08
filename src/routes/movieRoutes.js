const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie')

// todas las películas
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find().populate('characters')
    res.json(movies)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching movies' })
  }
})

// Creará una nueva película
router.post('/', async (req, res) => {
  const { title, year, genre, characters } = req.body
  const newMovie = new Movie({ title, year, genre, characters })
  try {
    const savedMovie = await newMovie.save()
    res.status(201).json(savedMovie)
  } catch (error) {
    res.status(500).json({ message: 'Error creating movie' })
  }
})

// Actualizar una película por ID
router.put('/:id', async (req, res) => {
  const { title, year, genre, characters } = req.body
  try {
    const movie = await Movie.findById(req.params.id)
    if (characters) {
      characters.forEach((characterId) => {
        if (!movie.characters.includes(characterId)) {
          movie.characters.push(characterId)
        }
      })
    }
    movie.title = title || movie.title
    movie.year = year || movie.year
    movie.genre = genre || movie.genre

    const updatedMovie = await movie.save()
    res.json(updatedMovie)
  } catch (error) {
    res.status(500).json({ message: 'Error updating movie' })
  }
})

// Eliminar una película por su ID
router.delete('/:id', async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id)
    res.json({ message: 'Movie deleted' })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting movie' })
  }
})

module.exports = router
