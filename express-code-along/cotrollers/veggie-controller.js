const veggies = require('../models/veggies')

const allVeggies = (req, res) => {
  res.send(veggies)
}

const getSingleVeggie = (req, res) => {
  res.send(veggies[parseInt(req.params.id)])
}

module.exports = {
  allVeggies,
  getSingleVeggie,
}
