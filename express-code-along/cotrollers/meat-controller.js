const meats = require('../models/meats')

// @desc get all meats
// @route GET /meats
// @access pubic
const allMeats = (req, res) => {
  res.render('meats/Index', {
    meats,
  })
}

// @desc get a single meat
// @route GET /meats/:index
// access public
const getSingleMeat = (req, res) => {
  if (meats[req.params.index]) {
    res.render('meats/Show', {
      meat: meats[req.params.index],
      index: parseInt(req.params.index),
    })
  } else {
    res.send(`<p>no meat with the index of ${req.params.index} exist</p>`)
  }
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
  meats.push(req.body)
  res.redirect('/meats')
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
