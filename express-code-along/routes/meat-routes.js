const express = require('express')
const router = express.Router()
const {
  allMeats,
  getSingleMeat,
  createMeatForm,
  createNew,
  editForm,
  updateMeat,
  deleteMeat,
} = require('../cotrollers/meat-controller.js')

// index => get all meats
router.get('/', allMeats)

// get form to create new meat
router.get('/new', createMeatForm)

// show => get single meat
router.get('/:id', getSingleMeat)

// create new meat
router.post('/', createNew)

// edit form to edit single meat
router.get('/:id/edit', editForm)

// update single meat
router.put('/:id', updateMeat)

// delete a meat
router.delete('/:id', deleteMeat)

module.exports = router
