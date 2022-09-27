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
router.get('/:index/edit', editSingleFruit)

// update
router.put('/:index', updateFruit)

// delete a fruit
router.delete('/:index', deleteFruit)

module.exports = router
