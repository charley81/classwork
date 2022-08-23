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

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const addOne = numbers.forEach(num => console.log(num + 1))

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

const arr99 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const getOdds = arr99.filter(num => num % 2 !== 0)
// console.log(getOdds)

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
// console.log(doesInclude3)

// SPLICE => insert, remove and replace elements
// arr.splice(start, deleteCount, elem1)
// modifies arr starting from index start: removes deleteCount elements and then inserts elem 1
const arr101 = ['I', 'Love', 'Javascript', 'right', 'now']
// delete item
// arr101.splice(1, 1) // from index 1 remove 1 element
// console.log(arr101)
arr101.splice(0, 3, 'lets', 'dance') // remove first three elements and replace with another
// console.log(arr101)
// console.log(arr101)
const removed = arr101.splice(0, 2)
// console.log(removed) // remove first two elements
const arr334 = ['I', 'study', 'javascript']
arr334.splice(2, 0, 'complex', 'language')
// console.log(arr334)
const arr1 = [1, 2, 3]
// arr.splice(-1, 0, 3, 4) // from index -1 one step from the end, delete 0 elements, then insert 3 and 4

// SLICE => returns a new array copy from index start to end (not including end)
const arr2 = ['t', 'e', 's', 't']

// console.log(arr2.slice(1, 3))
//
const arr2Copy = arr2.slice() // creates a copy
// console.log(arr2Copy)

// CONCAT
// The method arr.concat creates a new array that includes values form other arrays and additional items
// arr.concat(arg1, arg2)
const arr3 = [1, 2]
// console.log(arr3.concat([3, 4]))
// console.log(arr3.concat([3, 4], 5, 6))

// forEach
const arr4 = ['apples', 'grapes', 'cherries', 'peaches', 'mango']

// arr4.forEach(word => alert(word))

// Searching in array
// indexOf - lastIndexOf - includes
let arr5 = [1, 0, false]

// console.log(arr5.indexOf(0)) // 1
// console.log(arr5.indexOf(false)) // 2
// console.log(arr5.indexOf(null)) // -1

// const fruits = ['Apple', 'Orange', 'Apple']
// console.log(fruits.indexOf('Apple')) // 0 - first apple
// console.log(fruits.lastIndexOf('Apple')) // 2 - second apple

// map => takes an array, manipulates/mutates that array and then returns a new array
// filter => return all items meeting the condition
// forEach => executes provided function once for each item in array
// every => check if every items passes a test and returns a boolean

const newestArr = [0, 1, 2, 3, 4, 5]

const isBelowTen = newestArr.every(num => num < 10)
// console.log(isBelowTen)

const nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = [
  'The',
  'quick',
  'brown',
  'fox',
  'jumps',
  'over',
  'the',
  'lazy',
  'dog',
  'reallylongword',
]

// Filter
const lessThanFour = nums3.filter(num => num < 4)
// console.log(lessThanFour)
const wordsWithEvenLength = panagram.filter(word => word.length % 2 === 0)
// console.log(wordsWithEvenLength)

// Find
const findFirstDivByFive = nums3.find(num => num % 5 === 0)
// console.log(findFirstDivByFive)

const findLongerThanFive = panagram.find(word => word.length > 5)
// console.log(findLongerThanFive)

// Find Index
const findIndexDivByThree = nums3.findIndex(num => num % 3 === 0)
// console.log(findIndexDivByThree)
const wordIndexLessThanTwo = panagram.findIndex(word => word.length < 2)
// console.log(wordIndexLessThanTwo)

// forEach
// const numMultByThree = nums3.forEach(num => console.log(num * 3))
// console.log(numMultByThree)
// const addEx = panagram.forEach(word => console.log(`${word}!`))
