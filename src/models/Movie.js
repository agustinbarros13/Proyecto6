const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  genre: String,
  characters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }] // Relación con Character
})

module.exports = mongoose.model('Movie', movieSchema)
