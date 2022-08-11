// function: reusable block of code

// function declaration / definition
function sayHello() {
  let firstName
}

// function expression
const sayHi = function () {
  console.log('Hi')
}

// arrow function
const saysHi = () => {
  console.log('Says Hi')
}

// arrow function shorthand
const sayzHi = () => console.log('Sayz Hi')

// FUNCTION EXERCISES
// Ex. 1
function computeArea(width, height) {
  const area = width * height
  const output = `The area of a rectangle with a with of ${width} and a height of ${height} is ${area} square units`

  return output
}
console.log('Ex 1:', computeArea(5, 5))

// Ex. 2
const planetHasWater = function (planet) {
  if (planet === 'Earth' || planet === 'Mars') return true

  return false
}
console.log('Ex 2:', planetHasWater('Earth'))

// Ex. 3
const computeAreaArrow = (width, height) => {
  const area = width * height
  return `The area of a rectangle with a with of ${width} and a height of ${height} is ${area} square units`
}
console.log('Ex 3 ComputeArea:', computeAreaArrow(10, 15))

const planetHasWaterArrow = planet =>
  planet === 'Earth' || planet === 'Mars' ? true : false

console.log('Ex 3 planetEx:', planetHasWaterArrow('Venus'))

// WHILE LOOPS / FOR LOOPS

// Loops
// break breaks out of a loop
// continue skips a iteration and goes to the next iteration

// from 10 to 1

// Ex. 1
for (let i = 10; i > 0; i--) {
  console.log(i)
}

// Ex. 2
// 1,3,5,7,9 2,4,6,8,10
for (let i = 1; i < 10; i += 2) {
  console.log(i)
}

for (let i = 2; i <= 10; i += 2) {
  console.log(i)
}

// Ex. 3
for (let i = 6; i <= 60; i += 3) {
  console.log(i)
}

// Ex. 4
// version 1
let str = ''
for (let i = 1; i <= 7; i++) {
  str += '#'
  console.log(str)
}

// version 2
for (let i = 1; i <= 7; i++) {
  let step = ''

  for (let j = 0; j < i; j++) {
    step += '#'
  }

  console.log(step)
}

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

// While loops
let num1 = 0

while (num1 <= 35) {
  console.log(num1)
  num1 += 3
}

let num2 = 5
while (num2 <= 100) {
  console.log(num2)
  num2 += 5
}

let num3 = 0
while (num3 <= 20) {
  if (num3 % 2 === 0) {
    console.log(num3 * 3)
  }
  num3++
}

let i = 0
let j = 0
while (num4 < 20) {
  
  while () {

  }
}