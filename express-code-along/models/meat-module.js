const mongoose = require('mongoose')

const meatSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Meat', meatSchema)
