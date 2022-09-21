const express = require('express')
const path = require('path')
const app = express()

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('<h1>Hello Express!</h1>')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server listening on port: ${PORT}`))
