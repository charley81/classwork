const fruitModel = require('../models/fruit-model')
const veggieModel = require('../models/veggie-model')

// @desc get all veggies
// @route GET /veggies
// @access public
const allVeggies = (req, res) => {
  veggieModel.find({}, (error, foundVeggie) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.render('veggies/Index', { veggies: foundVeggie })
    }
  })
}

// @desc get a single veggie
// @route GET /veggies/:index
// @access public
const getSingleVeggie = (req, res) => {
  veggieModel.findById(req.params.id, (error, foundVeggie) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.status(200)
      res.render('veggies/Show', { veggie: foundVeggie })
    }
  })
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
  veggieModel.create(req.body, (error, createdVeggie) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.status(200).redirect('/veggies')
    }
  })
}

// @desc get form to update a veggie
// @route GET /veggies/edit
// @access public
const editForm = (req, res) => {
  veggieModel.findById(req.params.id, (error, foundVeggie) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.status(200)
      res.render('veggies/Edit', { veggie: foundVeggie })
    }
  })
}

// @desc update a single veggie
// @route PATCH /veggies/:index
// @access public
const updateVeggie = (req, res) => {
  veggieModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    (error, foundVegie) => {
      if (error) {
        res.status(400).json({ error })
      } else {
        res.status(200).redirect(`/veggies/${req.params.id}`)
      }
    }
  )
}

// @desc delete a single veggie
// @route DELETE /veggies/:index
// @access public
const deleteVeggie = (req, res) => {
  veggieModel.findByIdAndDelete(req.params.id, (error, deletedFruit) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.status(200)
      res.redirect('/veggies')
    }
  })
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
