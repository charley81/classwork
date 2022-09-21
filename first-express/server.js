const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

const answers = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes definitely',
  'You may rely on it',
  'As I see it yes',
  'Most likely',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  "Don't count on it",
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful',
]

// /greeting
app.get('/greeting', (req, res) => {
  res.send('<h1>Hello, stanger</h1>')
})

// /greeting/:name
app.get('/greeting/:name', (req, res) => {
  console.log(req.params)
  res.send(`Hello ${req.params.name}, It's so great to see you!`)
})

// /tip/:tip/:total
app.get('/tip/:tip/:total', (req, res) => {
  console.log(req.params)
  const tipPercentage = (req.params.tip / req.params.total) * 100
  res.send(`You tip was ${tipPercentage}% of $${req.params.total}`)
})

// /magic
app.get('/magic/Will%20I%20Be%20A%20Millionaire', (req, res) => {
  const random = Math.floor(Math.random() * (answers.length - 0)) + 0
  res.send(`<h1>Will I be a millionaire? ${answers[random]}</h1>`)
})

app.listen(PORT, () => console.log(`Port running on port: ${PORT}`))
