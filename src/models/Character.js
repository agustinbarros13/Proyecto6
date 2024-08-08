const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
  name: String,
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }
})

module.exports = mongoose.model('Character', characterSchema)
