// Arrays
const leaners = ['sami', 'chris', 24]
const learners2 = ['john', 'jane', 'jim']
leaners.push(true)

// push method => adds to end of array
// pop method => removes last item of array
// shift method => removes first item of array
// unshift method => adds to beginning of array
// These methods mutate the array

// spread operator
// let everybody = [...leaners, ...learners2]
// console.log(everybody)

// // rest parameters
// function add(...numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
//   }
// }

// add(4, 6, 2, 7, 1, 4)

// STRINGS
const firstName = 'Bobby'
// console.log(firstName.trim())
for (let i = 0; i < firstName.length; i++) {
  // console.log(firstName.charAt(i).toUpperCase())
}

for (let char of firstName) {
  // console.log(char)
}

const splicedStr = firstName.slice(0, 3)

// console.log(splicedStr)

const months = ['jan', 'mar', 'apr', 'june']

months.splice(1, 0, 'feb')
months.splice(4, 1, 'may')

// console.log(months)

const fruit = ['apple', 'pear', 'grape']

const fruit2 = [...fruit]

// FOREACH / CALLBACK FUNCS
const foods = ['bar b q', 'veggies', 'carbs', 'fruits', 'grains', 'cookies']

// console.log(foods.filter(food => food === 'bar b q'))

// console.log(foods.filter(food => food.length > 5))

// console.log(foods.filter(food => food[0] === 'c'))

const newArr = foods.map((food, i, arr) => food + '!')
// console.log(newArr)

// REDUCE
let nums = [1, 6, 5, 3, 7, 6, 9]

const numsSum = nums.reduce((prev, cur) => prev + cur, 0)
console.log(numsSum)
