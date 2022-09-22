const express = require('express')
const fruits = require('./data')

// create our express app
const app = express()

// identify our port
const PORT = process.env.PORT || 3000

// root route
app.get('/', (req, res) => {
  res.send('<h1>hello world</h1>')
})

// index route
app.get('/fruits', (req, res) => {
  res.send(fruits)
})

// show route
app.get('/fruits/:index', (req, res) => {
  res.send(fruits[parseInt(req.params.index)])
})
// // GET
// app.get('/', (req, res) => {
//   const color = req.query.color
//   const readyToEat = req.query.readytoeat === 'true' ? true : false

//   if (req.query.color && req.query.readytoeat) {
//     if (req.query.color) {
//       const colorFilter = fruits.filter(fruit => fruit.color === color)
//       res.send(colorFilter)
//     } else if (req.query.readytoeat) {
//       const readyFilter = fruits.filter(
//         fruit => fruit.readyToEat === readyToEat
//       )
//       res.send(readyFilter)
//     } else {
//       res.send("we don't have that fruit")
//     }
//   } else {
//     res.send(fruits)
//   }
// })

// app.get('/filter', (req, res) => {})

// listen to port
app.listen(PORT, () => console.log(`listening on port: ${PORT}`))
