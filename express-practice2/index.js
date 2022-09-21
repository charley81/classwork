const express = require('express')
const plants = require('./data/plants')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello From Index</h1>')
})

app.get('/plants', (req, res) => {
  res.json(plants)
})

app.get('/:index', (req, res) => {
  if (plants[req.params.index]) {
    res.send(plants[req.params.index])
  } else {
    res.send(`Can't find anything at index ${req.params.index}`)
  }
})

// multiple params
app.get('/hello/:firstname/:lastname', (req, res) => {
  console.log(req.params)
  res.send(`hello ${req.params.firstname} ${req.params.lastname}`)
})

// with req.query
app.get('/howdy/:firstname', (req, res) => {
  console.log('params', req.params)
  console.log('query', req.query)
  res.send(`hello ${req.query.title} ${req.params.firstname}`)
})

app.listen(PORT, () => console.log(`listening on port: ${PORT}`))
