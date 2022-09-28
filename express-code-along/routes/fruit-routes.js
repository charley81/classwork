const express = require('express')
const router = express.Router()
const {
  allFruits,
  getSingleFruit,
  createNewFruitForm,
  createNew,
  editSingleFruit,
  updateFruit,
  deleteFruit,
  seedDocs,
} = require('../cotrollers/fruit-controller.js')

// index => get all fruits
router.get('/', allFruits)

// get form to create a new fruit
router.get('/new', createNewFruitForm)

// show route => get single fruit
router.get('/:id', getSingleFruit)

// create a new fruit
router.post('/', createNew)

// get edit form to edit single fruit
router.get('/:id/edit', editSingleFruit)

// update
router.put('/:id', updateFruit)

// delete a fruit
router.delete('/:id', deleteFruit)

module.exports = router
