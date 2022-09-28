// const meats = require('../models/meats')
const meatModel = require('../models/meat-module')

// @desc get all meats
// @route GET /meats
// @access pubic
const allMeats = (req, res) => {
  meatModel.find({}, (error, foundMeats) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.status(200)
      res.render('meats/Index', { meats: foundMeats })
    }
  })
}

// @desc get a single meat
// @route GET /meats/:index
// access public
const getSingleMeat = (req, res) => {
  meatsModel.findById(req.params.id, (error, foundMeat) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.status(200).render('meats/Show', { meat: foundMeat })
    }
  })
}

// @desc get form to create a new meat
// @route GET /meats/new
// @access public
const createMeatForm = (req, res) => {
  res.render('meats/New')
}

// @desc create a new meat
// @route PUT /meats
// @access public
const createNew = (req, res) => {
  meatModel.create(req.body, (error, createdMeat) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.status(200)
      res.redirect('/meats')
    }
  })
}

// @desc get form to update a meat
// @route PATCH /meats/edit
// @access public
const editForm = (req, res) => {
  res.render('meats/edit')
}

// @desc update a single meat
// @route PATCH /meats/:index
// @access public
const updateMeat = (req, res) => {
  res.send('updated a single meat')
}

// @desc delete a single meat
// @route DELETE /meats/:index
// @acess public
const deleteMeat = (req, res) => {
  res.send('deleted a single meat')
}

module.exports = {
  allMeats,
  getSingleMeat,
  createMeatForm,
  createNew,
  editForm,
  updateMeat,
  deleteMeat,
}
