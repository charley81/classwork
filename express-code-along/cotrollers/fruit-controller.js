const fruits = require('../models/fruits')

// @desc get all fruits
// @route GET /fruits
// @access public
const allFruits = (req, res) => {
  res.render('fruits/Index', {
    fruits,
  })
}

// @desc get a single fruit
// @route GET /fruits/:index
// @access public
const getSingleFruit = (req, res) => {
  if (fruits[req.params.index]) {
    res.render('fruits/Show', {
      fruit: fruits[req.params.index],
      index: req.params.index,
    })
  } else {
    res.send(`<p>no fruit with the index of ${req.params.index} exist</p>`)
  }
}

// @desc get form to create a new fruit
// @router GET /fruits/new
// @access public
const createNewFruitForm = (req, res) => {
  res.render('fruits/New')
}

// @desc create a new fruit
// @route PUT /fruits
// @access public
const createNew = (req, res) => {
  // ?name=peach&color=peachy&readyToEat=on
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true
  } else {
    req.body.readyToEat === 'false'
  }

  fruits.push(req.body)
  res.redirect('/fruits')
}

// @desc edit form to update a fruit
// @route GET /fruits/edit
// access public
const editSingleFruit = (req, res) => {
  res.render('fruits/Edit')
}

// @desc request to update a fruit
// @route PATCH /fruits/:index
const updateFruit = (req, res) => {
  res.send('updated a signle fruit')
}

// @desc request to delete a fruit
// @route DELETE /fruits/:indexs
// access public
const deleteFruit = (req, res) => {
  res.send('deleted a signle fruit')
}

module.exports = {
  allFruits,
  getSingleFruit,
  createNewFruitForm,
  createNew,
  editSingleFruit,
  updateFruit,
  deleteFruit,
}
