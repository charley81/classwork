const express = require('express')
const router = express.Router()
const {
  allSpices,
  newForm,
  createNew,
  getSpice,
  deleteSpice,
  editForm,
  updateSpice,
} = require('../cotrollers/spice-controller')

// get all spices
router.get('/', allSpices)

// get new form
router.get('/new', newForm)

// create new spice
router.post('/', createNew)

// get a single spice
router.get('/:id', getSpice)

// delete a single spice
router.delete('/:id', deleteSpice)

// get edit form
router.get('/:id/edit', editForm)

// edit spice
router.put('/:id', updateSpice)

module.exports = router
