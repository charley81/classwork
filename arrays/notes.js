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

const items = [
  {
    name: 'cookies',
    price: 5,
  },
  {
    name: 'pasta',
    price: 3,
  },
  {
    name: 'milk',
    price: 4,
  },
]

// let totalPrice = 0
// items.forEach(item => (totalPrice += item.price))

// console.log(totalPrice)

// REDUCE
// reduce gets two different parameters
// 1st parameter is a function
// 2nd parameter is your starting point
items.reduce((total, item) => {
  // console.log(`Total: ${total}`)
  // console.log(`Item: ${item.price}`)
  return total + item.price
}, 0)
let nums = [1, 6, 5, 3, 7, 6, 9]

const numsSum = nums.reduce((prev, cur) => prev + cur, 0)

const people = [
  {
    name: 'Chris',
    age: 99,
  },
  {
    name: 'Sophie',
    age: 92,
  },
  {
    name: 'Rocco',
    age: 97,
  },
  {
    name: 'Irina',
    age: 99,
  },
]

people.reduce((groupedPeople, person) => {
  const age = person.age
  if (groupedPeople[age] == null) groupedPeople[age] = []
  groupedPeople[age].push(person)
  return groupedPeople
})

// MAP
// a new array is returned with results from the callback function
// map manipulates the data and returns a new array with that data
const myArr = [1, 2, 3, 4]

const newArr2 = myArr.map((num, i, arr) => {
  // console.log(num, i, arr)
  return num * 2
})

// console.log(newArr2)

// FILTER
// returns a new array with the elements that satisfy the condition
// doesn't mutate the original array
const arrFilter = myArr.filter((num, i, arr) => num > 2)
// console.log(arrFilter)

// SOME
// Returns boolean value based on the condition satisfied, true or false.
const checkSome = myArr.some(num => num > 2)
// console.log(checkSome)

// EVERY
// Every() method is the same as some() method except the condition should be satisfied for all elements in the array. It also returns a boolean value either true or false.
const checkEvery = myArr.every(num => num >= 1)
// console.log(checkEvery)

// FIND
// It is used to find the value of the element that satisfies the condition provided in the function. It returns the first occurrence of the element in the array.
const numFind = myArr.find((num, i) => {
  // console.log(num, i)
  return num > 2
})
// console.log('result: ', numFind)

// INCLUDES
// Checks whether the given value is found within the array, If found it returns a boolean value.
// Parameters Passed:
//Value — Value to be searched in the array.
// fromIndex — From which index position in the array it should start searching. By default, the value is 0.
const doesInclude = myArr.includes(3)
const doesInclude2 = myArr.includes(4, 3)
const doesInclude3 = myArr.includes(2, 2)
console.log(doesInclude3)
