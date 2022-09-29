const spiceModel = require('../models/spice-model')

// @desc get all spices
// @route GET /spices
// @access public
const allSpices = (req, res) => {
  spiceModel.find({}, (error, allSpiceDocs) => {
    if (error) {
      res.status(400).json({ error })
    }

    res.status(200)
    res.render('spices/Index', { spices: allSpiceDocs })
  })
}

// @desc form to create new spice
// @route GET /spices/new
// access public
const newForm = (req, res) => {
  res.render('spices/New')
}

// @desc create a new spice and add to db
// @route PUT /spices
// access public
const createNew = (req, res) => {
  spiceModel.create(req.body, (error, createdSpice) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.status(200)
      res.redirect('/spices')
    }
  })
}

// @desc get a single spice
// @route GET /spices/:id
// @access public
const getSpice = (req, res) => {
  spiceModel.findById(req.params.id, (error, foundSpice) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.status(200).render('spices/Show', { spice: foundSpice })
    }
  })
}

// desc delete a single spice
// @route DELETE /spices/:id
// @access public
const deleteSpice = (req, res) => {
  spiceModel.findByIdAndDelete(req.params.id, (error, deletedSpice) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.status(200).redirect('/spices')
    }
  })
}

// @desc get edit form
// @route GET /spices/:id/edit
// @access public
const editForm = (req, res) => {
  spiceModel.findById(req.params.id, (error, foundSpice) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.status(200)
      res.render('spices/Edit', { spice: foundSpice })
    }
  })
}

const updateSpice = (req, res) => {
  spiceModel.findByIdAndUpdate(req.params.id, req.body, (error, foundSpice) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.status(200)
      res.redirect(`/spices/${req.params.id}`)
    }
  })
}

module.exports = {
  allSpices,
  newForm,
  createNew,
  getSpice,
  deleteSpice,
  editForm,
  updateSpice,
}
