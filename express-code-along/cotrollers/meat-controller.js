const meats = require('../models/meats')

const allMeats = (req, res) => {
  res.send(meats)
}

const getSingleMeat = (req, res) => {
  res.send(meats[parseInt(req.params.id)])
}

module.exports = {
  allMeats,
  getSingleMeat,
}
