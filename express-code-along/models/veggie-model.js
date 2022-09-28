const mongoose = require('mongoose')

const veggieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Veggies', veggieSchema)
