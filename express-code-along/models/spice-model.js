const mongoose = require('mongoose')

const spiceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Spices', spiceSchema)
