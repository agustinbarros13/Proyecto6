const mongoose = require('mongoose')
const Movie = require('../models/Movie')
const Character = require('../models/Character')

mongoose
  .connect(
    'mongodb+srv://agustinb:owasgidGFq7W6dp2@cluster0.23pbm.mongodb.net/myDatabase?retryWrites=true&w=majority'
  )
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error:', err))

const seedMovies = async () => {
  try {
    await Movie.deleteMany({})
    const movies = await Movie.insertMany([
      { title: 'Inception', year: 2010, genre: 'Sci-Fi' },
      { title: 'The Matrix', year: 1999, genre: 'Action' }
    ])
    console.log('Movies seeded')
    return movies
  } catch (error) {
    console.error('Error seeding movies:', error)
  }
}

const seedCharacters = async (movies) => {
  try {
    await Character.deleteMany({})

    const matrixMovie = movies.find((movie) => movie.title === 'The Matrix')
    const inceptionMovie = movies.find((movie) => movie.title === 'Inception')

    await Character.insertMany([
      { name: 'Neo', movie: matrixMovie._id },
      { name: 'Cobb', movie: inceptionMovie._id }
    ])
    console.log('Characters seeded')
  } catch (error) {
    console.error('Error seeding characters:', error)
  }
}

const runSeeds = async () => {
  const movies = await seedMovies()
  await seedCharacters(movies)
  mongoose.connection.close()
}

runSeeds()
