const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.engine('madeline', (filePath, options, callback) => {
  // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content
      .toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>')
      .replace('#content#', '<div>' + options.content + '</div>')
    return callback(null, rendered)
  })
})

app.get('/', (req, res) => {
  res.render('template', {
    title: 'Hey',
    message: 'Hello there!',
    content: 'I am the Boss Ricky Ross',
  })
})

app.get('/about-me', (req, res) => {
  res.render('template', {
    title: 'Hey',
    message: 'Rick Ross!',
    content: 'The most underated Rapper in the game',
  })
})

app.get('/another-one', (req, res) => {
  res.render('template', {
    title: 'We The Best',
    message: 'Who!',
    content:
      'We Taking Over, Major Key Alert, Yall know who it is, All I do is win',
  })
})

app.set('views', './views') // specify the views directory
app.set('view engine', 'madeline') // register the hypatia view engine

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server listening on port: ${PORT}`))
