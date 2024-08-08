const mongoose = require('mongoose')
require('dotenv').config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Database connected')
  } catch (error) {
    console.error('Database connection error', error)
  }
}

module.exports = { connect }
