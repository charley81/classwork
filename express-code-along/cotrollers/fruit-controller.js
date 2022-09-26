const fruits = require('../models/fruits')

// get all fruits
const allFruits = (req, res) => {
  res.render('Index', {
    fruits,
  })
}

const getSingleFruit = (req, res) => {
  if (fruits[req.params.index]) {
    res.render('Show', {
      fruit: fruits[req.params.index],
    })
  } else {
    res.send(`<p>no fruit with the index of ${req.params.index} exist</p>`)
  }
}

const createNewFruitForm = (req, res) => {
  res.render('New')
}

const createNew = (req, res) => {
  // ?name=peach&color=peachy&readyToEat=on
  console.log(req.body)
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true
  } else {
    req.body.readyToEat === 'false'
  }
  fruits.push(req.body)
  res.redirect('/fruits')
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
