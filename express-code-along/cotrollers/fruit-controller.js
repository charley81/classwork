const fruits = require('../models/fruits')

// get all fruits
const allFruits = (req, res) => {
  res.send(fruits)
}

const getSingleFruit = (req, res) => {
  fruits[req.params.index]
    ? res.send(fruits[parseInt(req.params.index)])
    : res.send(`<h1>There is no fruit at index ${req.params.index}</h1>`)
}

const createNewFruitForm = (req, res) => {
  res.send('you get a form to create a new fruit')
}

const createNew = (req, res) => {
  res.send('creating a new fruit')
}

const editSingleFruit = (req, res) => {
  res.send('<you get a form to edit a single fruit')
}

const updateFruit = (req, res) => {
  res.send('sending updated info to db')
}

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
