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
