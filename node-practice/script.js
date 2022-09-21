// node modules
// Modules in Node allow us to modularize and reuse code in a Node app.
const fs = require('fs')
const request = require('request')
const daysOfTheWeek = require('./days-of-the-week')
const random = require('./modules/random')
const circle = require('./modules/circle')

// fs.writeFile('./hello.txt', 'hello world', () => {
//   console.log('done creating file')
// })

// const day = daysOfTheWeek.getWeekDay(4)

// const getUser = request(
//   'http://jsonplaceholder.typicode.com/users',
//   (err, res, body) => {
//     console.log(body)
//   }
// )

// console.log(random.randomNum(5, 10))

// for (let i = 0; i < 10; i++) {
//   console.log(random.randomNum(100, 200))
// }

const areaOfCircle = circle.area(50)
const cerOfCircle = circle.circumference(75)

console.log(areaOfCircle)
console.log(cerOfCircle)
