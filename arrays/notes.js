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

// Filter => returns all items that pass the provided testing function
const lessThanFour = nums3.filter(num => num < 4)
// console.log(lessThanFour)
const wordsWithEvenLength = panagram.filter(word => word.length % 2 === 0)
// console.log(wordsWithEvenLength)

// Find => returns the first item in a array that passes the provided testing function
const findFirstDivByFive = nums3.find(num => num % 5 === 0)
// console.log(findFirstDivByFive)

const findLongerThanFive = panagram.find(word => word.length > 5)
// console.log(findLongerThanFive)

// Find Index => returns the index of the first item in a array that passes the provided testing function
const findIndexDivByThree = nums3.findIndex(num => num % 3 === 0)
// console.log(findIndexDivByThree)
const wordIndexLessThanTwo = panagram.findIndex(word => word.length < 2)
// console.log(wordIndexLessThanTwo)

// forEach => executes a provided function on each item in an array
// const numMultByThree = nums3.forEach(num => console.log(num * 3))
// console.log(numMultByThree)
// const addEx = panagram.forEach(word => console.log(`${word}!`))

// Map => creates a new array with the results of calling the callback function
const multiplyByHundred = nums3.map(num => num * 100)
// console.log(multiplyByHundred)
const allUpper = panagram.map(word => word.toUpperCase())
// console.log(allUpper)
// Some => test wether at least one element in the arr passes the condition and returns a boolean
const someDivByThree = nums3.some(num => num % 3 === 0)
// console.log(someDivByThree)
const someA = panagram.some(word => word.includes('a'))
// console.log(someA)

// reduce
const numsSum2 = nums3.reduce((acc, cur) => acc + cur, 0)
// console.log(numsSum2)
const wordsConcat = panagram.reduce((acc, cur) => acc + cur)
// console.log(wordsConcat)

// sort
const nums4 = [15, 5, 1, 45, 2, 19]
const words4 = ['these', 'are', 'some', 'words', 'in', 'a', 'array']
const numsSorted1 = nums4.sort()
// I didn't get what I would expect (I would expect the numbers to be sorted from low to high but it looks like it sorts by the first digit in a number)
// console.log(numsSorted1)
const wordsSorted = words4.sort()
// console.log(wordsSorted)
// this looks as expectd, it looks like it sorts in alphabetic order according to first letter in the string
const numsAscending = nums4.sort((a, b) => a - b)
// console.log(numsAscending)
const numsDescending = nums4.sort((a, b) => b - a)
// console.log(numsDescending)
const wordsAscending = words4.sort((a, b) => a - b)
// console.log(wordsAscending)
const wordsDescending = words4.sort((a, b) => (a > b ? -1 : 1))
// console.log(wordsDescending)
// console.log(words4)
// the original array get mutated

const panagramArr = [
  'The',
  'quick',
  'brown',
  'fox',
  'jumps',
  'over',
  'the',
  'lazy',
  'dog',
]

const isPanagram = arr => {
  const alphabet = 'abcdefghijqlmnopqrstuvwxyz'.split('')
  const newArr = arr.toString().toLowerCase().split('')
  return alphabet.every(letter => newArr.includes(letter))
}

isPanagram(panagramArr)

const products = [
  {
    name: 'allen wrench',
    price: 2.99,
    description: 'handy tool',
  },
  {
    name: 'cornucopia',
    price: 5.99,
    description: 'festive holiday decoration',
  },
  {
    name: 'banana',
    price: 0.99,
    description: 'full of potassium',
  },
  {
    name: 'guillotine (cigar)',
    price: 10.59,
    description: 'behead your stub',
  },
  {
    name: 'jack-o-lantern',
    price: 3.99,
    description: 'spooky seasonal fun',
  },
  {
    name: 'doggie treat (box)',
    price: 5.99,
    description: "fido loves 'em",
  },
  {
    name: 'egg separator',
    price: 3.99,
    description: 'it separates yolks from whites',
  },
  {
    name: 'LED lightbulb',
    price: 6.55,
    description: "It's super-efficient!",
  },
  {
    name: 'owl pellets',
    price: 3.99,
    description: "Don't ask what they used to be.",
  },
  {
    name: 'flag',
    price: 5.99,
    description: 'catches the breeze',
  },
  {
    name: 'hair brush',
    price: 6.99,
    description: 'fine boar bristles',
  },
  {
    name: 'iridium (one gram)',
    price: 19.36,
    description: 'corrosion-resistant metal',
  },
  {
    name: 'quark',
    price: 0.01,
    description: 'Very small',
  },
  {
    name: 'turtleneck',
    price: 19.99,
    description: 'available in black and slightly-darker black',
  },
  {
    name: 'kaleidoscope',
    price: 8.25,
    description: 'tube with moving plastic pieces inside',
  },
  {
    name: 'mitt (leather)',
    price: 15,
    description: 'regulation sized',
  },
  {
    name: 'nothing',
    price: 10,
    description: "Hey, if you pay us, we won't ask any questions.",
  },
  {
    name: 'violin',
    price: 2000,
    description: 'Talk about a JS fiddle...',
  },
  {
    name: 'yoyo',
    price: 1,
    description: 'We had to pull some strings to get this one in.',
  },
  {
    name: 'pincushion',
    price: 1.99,
    description: "You'll get 'stuck' on it",
  },
]

const lessThanTen = products.filter(item => item.price < 10)
// console.log(lessThanTen)
const sortedNames = products.sort((a, b) => {
  const namesA = a.name.toUpperCase()
  const namesB = b.name.toUpperCase()

  if (namesA < namesB) return -1 // A would come first
  if (namesA > namesB) return 1 // A would come second, B would come first
  return 0 // names are equal, so both values are unchanged
})
// console.log(sortedNames)
