const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const characterRoutes = require('./routes/characterRoutes')
const movieRoutes = require('./routes/movieRoutes')
require('dotenv').config()

const app = express()
const mongoURI = process.env.MONGO_URI

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error:', err))

app.use(express.json())
app.use('/characters', characterRoutes)
app.use('/movies', movieRoutes)
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})
