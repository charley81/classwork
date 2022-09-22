const veggies = require('../models/veggies')

const allVeggies = (req, res) => {
  res.send(veggies)
}

const getSingleVeggie = (req, res) => {
  res.send(veggies[req.params.index])
}

module.exports = {
  allVeggies,
  getSingleVeggie,
}
