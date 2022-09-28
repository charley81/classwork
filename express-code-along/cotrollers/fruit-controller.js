// const fruits = require('../models/fruits')
const fruitModel = require('../models/fruit-model')

// @desc get all fruits
// @route GET /fruits
// @access public
const allFruits = (req, res) => {
  // find takes two arguments
  // 1. an object with our query to filter our data and find exactly what we need
  // 2. callback with an error object and the found data
  fruitModel.find({}, (err, foundFruit) => {
    if (err) {
      res.status(400).json({ error: err })
    } else {
      res.status(200)
      res.render('fruits/Index', { fruits: foundFruit })
    }
  })
}

// @desc get a single fruit
// @route GET /fruits/:index
// @access public
const getSingleFruit = (req, res) => {
  // findBy accepts 2 args
  // 1. id of doc in database
  // 2. callback with err obj and found doc
  fruitModel.findById(req.params.id, (error, foundFruit) => {
    if (error) {
      res.status(400).json(error)
    } else {
      res.status(200).render('fruits/Show', { fruit: foundFruit })
    }
  })
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
  // create has two arguments
  //  1 the data we want to send
  // 2 callback function
  fruitModel.create(req.body, (err, createdFruit) => {
    if (err) {
      res.status(400).json({ error: err })
    } else {
      res.status(200)
      res.redirect('/fruits')
    }
  })
}

// @desc edit form to update a fruit
// @route GET /fruits/edit
// access public
const editSingleFruit = (req, res) => {
  fruitModel.findById(req.params.id, (error, foundFruit) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.status(200).render('fruits/Edit', { fruit: foundFruit })
    }
  })
}

// @desc request to update a fruit
// @route PATCH /fruits/:index
const updateFruit = (req, res) => {
  // findByIdAndUpdate take 4 args
  // 1. the ID
  // 2. new data we want to use to update the old document
  // 3. optional => an options object, which looks like this: {new: true}
  // 4. callback (with error obj and foundFruit)
  fruitModel.findByIdAndUpdate(req.params.id, req.body, (error, foundFruit) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.status(200).redirect(`/fruits/${req.params.id}`)
    }
  })
}

// @desc request to delete a fruit
// @route DELETE /fruits/:indexs
// access public
const deleteFruit = (req, res) => {
  fruitModel.findByIdAndDelete(req.params.id, (error, deletedFruit) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.status(200).redirect('/fruits')
    }
  })
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
