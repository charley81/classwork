const express = require('express')

// create our express app
const app = express()

// identify our port
const PORT = process.env.PORT || 3000

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// view engine setup
app.set('view engine', 'js')
app.engine('js', require('express-react-views').createEngine())

// route setup
app.use('/fruits', require('./routes/fruit-routes'))
app.use('/api/meats', require('./routes/meat-routes'))
app.use('/api/veggies', require('./routes/veggie-routes'))

// listen to port
app.listen(PORT, () => console.log(`listening on port: ${PORT}`))
