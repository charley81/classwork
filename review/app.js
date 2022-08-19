// ===== SECTION I Vars & Datatypes =====
// A
var val = 'A' //1
val = 'B' //2
var val2 = val //3
/**
 * 4
 * Declare: When you declare a function
 * function() {}
 *
 * Assgin: When you assign a value to a varable
 * const letter = 'A'
 *
 * Define: When you define a function???
 * function() {}
 *
 * 5
 * pseudocoding is when you write out the step that you want to code in human readable text. This helps you figure out the step that you need to take to complete the problem
 *
 * 6
 * 90% thinking about how to solve and 10% solving
 *
 */

// B
let firstVariable
firstVariable = 'Hello'
firstVariable = 123
let secondVariable = firstVariable
secondVariable = 'anyString'
// firstVariable = 123
const chris = 'Chris'
const expression = `Hello my name is ${chris}`

// C
const a = 4
const b = 53
const c = 57
const d = 16
const e = 'Kevin'

console.log(a !== b)
console.log(c !== d)
console.log('Name' === 'Name')
console.log(true || false)
console.log(false || false || false || false || false || true)
console.log(false === false)
console.log(e === 'Kevin')
console.log(a + b === c)
console.log(a * a === d)

// D
const animal = 'Cow'
if (animal === 'Cow') {
  console.log('mooooo')
} else {
  console.log("Hey! You're not a cow.")
}

// E
const age = 21
age >= 16
  ? console.log('Here are the keys!')
  : console.log("Sorry, you're too young")

// ===== SECTION II =====
// A
// for (let i = 0; i <= 10; i++) {
//   console.log(i)
// }

// for (let i = 10; i <= 400; i++) {
//   console.log(i)
// }

// for (let i = 12; i <= 4000; i += 3) {
//   console.log(i)
// }

// B
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is an even number`)
//   } else {
//     console.log(i)
//   }
// }

// C
// for (let i = 0; i <= 100; i++) {
//   if (i % 15 === 0) {
//     console.log(`I found a ${i}. Three is a crowd, High five!`)
//   } else if (i % 5 === 0) {
//     console.log(`I found a ${i}. High five!`)
//   } else if (i % 3 === 0) {
//     console.log(`I found a ${i}. Three is a crowd`)
//   } else {
//     console.log(i)
//   }
// }

// D
let bankAccount = 0
for (let i = 0; i <= 10; i++) {
  bankAccount += i
}

let bonusAccount = 0
for (let i = 0; i <= 100; i++) {
  const numMultiplied = i * 2
  bonusAccount += numMultiplied
}

// ===== SECTION III =====
// A
// indexes
// Yes
// A shopping list

// B
const quotes = [
  'I have no special talent. I am only passionately curious',
  'Wisely, and slow. They stumble that run fast.',
  'If you judge people, you have no time to love them.',
]

// C
const randomThings = [1, 10, 'Hello', true]
randomThings[0]
randomThings[2] = 'World'

// D
const ourClass = ['Salty', 'Zoom', 'Sardine', 'Slack', 'Github']
ourClass[2]
ourClass[4] = 'Octocat'
ourClass.push('Cloud City')

// E
const myArray = [5, 10, 500, 20]
myArray.push('Aegon', 'Hello')
myArray.shift()
myArray.unshift('Bob Marley')
myArray.pop()
myArray.reverse()
/**
 * Yes the array is mutated
 * Mutate means altering the original
 * It returned the array reversed
 */

// F
const myInt = 22
if (myInt < 100) {
  console.log('little number')
} else {
  console.log('big number')
}

// G
if (myInt < 5) {
  console.log('little number')
} else if (myInt > 10) {
  console.log('big number')
} else {
  console.log('monkey')
}

// H
const kristynsCloset = [
  'left shoe',
  'cowboy boots',
  'right sock',
  'GA hoodie',
  'green pants',
  'yellow knit hat',
  'marshmallow peeps',
]

const thomasCloset = [
  [
    'grey button-up',
    'dark grey button-up',
    'light blue button-up',
    'blue button-up',
  ],
  ['grey jeans', 'jeans', 'PJs'],
  ['wool mittens', 'wool scarf', 'raybans'],
]
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today`)
kristynsCloset.splice(6, 0, 'raybans')
kristynsCloset[5] = 'stained knit hat'

console.log(
  `Thom is looking fierce in a ${thomasCloset[0][0]}, ${thomasCloset[1][1]} and ${thomasCloset[2][2]}`
)
thomasCloset[2][2] = 'Footie Pajamas'

// ===== SECTION IV =====
// A
const printGreeting = name => `Hello there ${name}`

// B
const printCool = name => `${name} is cool`

// C
const calculateCube = num => num * num * num

// D
const isVowel = letter => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  if (vowels.includes(letter.toLowerCase())) {
    return true
  } else {
    return false
  }
}
// console.log(isVowel('c'))

// E
const getTwoLengths = (str1, str2) => {
  const output = []
  output.push(str1.length, str2.length)
  return output
}

// console.log(getTwoLengths('hello', 'bye'))

// F
const getMultipleLengths = arr => {
  const output = []
  arr.forEach(word => output.push(word.length))
  return output
}

// console.log(getMultipleLengths(['Hello', 'how', 'are', 'you']))

// G
const maxOfThree = (...args) => {
  let output = args[0]
  args.forEach(num => {
    if (num > output) {
      output = num
    }
  })
  return output
}

// console.log(maxOfThree(4, 8, 2))

// H
function printLongestWord(arr) {
  let output = ''
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > output.length) {
      output = arr[i]
    }
  }
  return output
}

// console.log(
//   printLongestWord(['apple', 'watermelon', 'peaches', 'fdkfjdkfjdkfjdfkjf'])
// )

// Objects
const user = {
  name: 'John Doe',
  email: 'jdoe@mail.com',
  age: 21,
  purchases: [],
}

user.email = 'test@mail.com'
user.age++
user.location = '555 main st. Brooklyn NY'
user.purchases.push('carbohydrates', 'piece of mind', 'merino jodhpurs')
console.log(user.purchases[2])

user.friend = {
  name: 'Jane Doe',
  age: 21,
  location: '555 main st. Brookly NY',
  purchases: [],
}
console.log(user.friend.name)
console.log(user.friend.location)
user.friend.age = 55
user.friend.purchases.push('The One Ring', 'A latte')
console.log(user.friend.purchases[1])
user.purchases.forEach(item => console.log(item))
user.friend.purchases.forEach(item => console.log(item))

const updateUser = () => {
  user.age++
  user.name.toUpperCase()
}

const oldAndLoud = person => {
  console.log(person)
  person.age++
  person.name.toUpperCase()
}

oldAndLoud(user)

// ===== SECTION V =====
