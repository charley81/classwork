const veggies = require('../models/veggies')

// @desc get all veggies
// @route GET /veggies
// @access public
const allVeggies = (req, res) => {
  res.render('veggies/Index', {
    veggies,
  })
}

// @desc get a single veggie
// @route GET /veggies/:index
// @access public
const getSingleVeggie = (req, res) => {
  if (veggies[req.params.index]) {
    res.render('veggies/Show', {
      veggie: veggies[req.params.index],
      index: parseInt(req.params.index),
    })
  } else {
    res.send(`<p>no veggie with the index of ${req.params.index} exist</p>`)
  }
}

// @desc get form to create a new veggie
// @route GET /veggies/new
// @access public
const newForm = (req, res) => {
  res.render('veggies/New')
}

// @desc create a new veggie
// @route POST /veggies
// @access public
const createNew = (req, res) => {
  veggies.push(req.body)
  res.redirect('/veggies')
}

// @desc get form to update a veggie
// @route GET /veggies/edit
// @access public
const editForm = (req, res) => {
  res.render('veggies/edit')
}

// @desc update a single veggie
// @route PATCH /veggies/:index
// @access public
const updateVeggie = (req, res) => {
  res.send('updated a single veggie')
}

// @desc delete a single veggie
// @route DELETE /veggies/:index
// @access public
const deleteVeggie = (req, res) => {
  res.send('deleted a single veggie')
}

module.exports = {
  allVeggies,
  getSingleVeggie,
  newForm,
  createNew,
  editForm,
  updateVeggie,
  deleteVeggie,
}
