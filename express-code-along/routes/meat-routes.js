const express = require('express')
const router = express.Router()
const { allMeats, getSingleMeat } = require('../cotrollers/meat-controller.js')

// index route => get all meats
router.get('/', allMeats)

// show route => get single meat
router.get('/:index', getSingleMeat)

module.exports = router
