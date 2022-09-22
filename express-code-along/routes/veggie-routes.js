const express = require('express')
const router = express.Router()
const {
  allVeggies,
  getSingleVeggie,
} = require('../cotrollers/veggie-controller')

// index route => get all veggies
router.get('/', allVeggies)

// show route => get single veggie
router.get('/:index', getSingleVeggie)

module.exports = router
