const express = require('express')

// create our express app
const app = express()

// identify our port
const PORT = process.env.PORT || 3000

app.use('/api/fruits', require('./routes/fruit-routes'))
app.use('/api/meats', require('./routes/meat-routes'))
app.use('/api/veggies', require('./routes/veggie-routes'))

// listen to port
app.listen(PORT, () => console.log(`listening on port: ${PORT}`))
