const mongoose = require('mongoose')

const fruitSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Fruit', fruitSchema)
