const express = require('express')
const router = express.Router()
const {
  allVeggies,
  getSingleVeggie,
  newForm,
  createNew,
  editForm,
  updateVeggie,
  deleteVeggie,
} = require('../cotrollers/veggie-controller')

// index => get all veggies
router.get('/', allVeggies)

// new => get form to create a new fruit
router.get('/new', newForm)

// show => get single veggie
router.get('/:index', getSingleVeggie)

// create a new fruit
router.post('/', createNew)

// edit => get edit form to update a single veggie
router.get('/:index/edit', editForm)

// update => update a single veggie
router.patch('/:index', updateVeggie)

// delete => delete a single veggie
router.delete('/:index', deleteVeggie)

module.exports = router
