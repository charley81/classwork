// // ===== SECTION I Vars & Datatypes =====
// // A
// var val = 'A' //1
// val = 'B' //2
// var val2 = val //3
// /**
//  * 4
//  * Declare: When you declare a function
//  * function() {}
//  *
//  * Assgin: When you assign a value to a varable
//  * const letter = 'A'
//  *
//  * Define: When you define a function???
//  * function() {}
//  *
//  * 5
//  * pseudocoding is when you write out the step that you want to code in human readable text. This helps you figure out the step that you need to take to complete the problem
//  *
//  * 6
//  * 90% thinking about how to solve and 10% solving
//  *
//  */

// // B
// let firstVariable
// firstVariable = 'Hello'
// firstVariable = 123
// let secondVariable = firstVariable
// secondVariable = 'anyString'
// // firstVariable = 123
// const chris = 'Chris'
// const expression = `Hello my name is ${chris}`

// // C
// const a = 4
// const b = 53
// const c = 57
// const d = 16
// const e = 'Kevin'

// console.log(a !== b)
// console.log(c !== d)
// console.log('Name' === 'Name')
// console.log(true || false)
// console.log(false || false || false || false || false || true)
// console.log(false === false)
// console.log(e === 'Kevin')
// console.log(a + b === c)
// console.log(a * a === d)

// // D
// const animal = 'Cow'
// if (animal === 'Cow') {
//   console.log('mooooo')
// } else {
//   console.log("Hey! You're not a cow.")
// }

// // E
// const age = 21
// age >= 16
//   ? console.log('Here are the keys!')
//   : console.log("Sorry, you're too young")

// // ===== SECTION II =====
// // A
// // for (let i = 0; i <= 10; i++) {
// //   console.log(i)
// // }

// // for (let i = 10; i <= 400; i++) {
// //   console.log(i)
// // }

// // for (let i = 12; i <= 4000; i += 3) {
// //   console.log(i)
// // }

// // B
// // for (let i = 1; i <= 100; i++) {
// //   if (i % 2 === 0) {
// //     console.log(`${i} is an even number`)
// //   } else {
// //     console.log(i)
// //   }
// // }

// // C
// // for (let i = 0; i <= 100; i++) {
// //   if (i % 15 === 0) {
// //     console.log(`I found a ${i}. Three is a crowd, High five!`)
// //   } else if (i % 5 === 0) {
// //     console.log(`I found a ${i}. High five!`)
// //   } else if (i % 3 === 0) {
// //     console.log(`I found a ${i}. Three is a crowd`)
// //   } else {
// //     console.log(i)
// //   }
// // }

// // D
// let bankAccount = 0
// for (let i = 0; i <= 10; i++) {
//   bankAccount += i
// }

// let bonusAccount = 0
// for (let i = 0; i <= 100; i++) {
//   const numMultiplied = i * 2
//   bonusAccount += numMultiplied
// }

// // ===== SECTION III =====
// // A
// // indexes
// // Yes
// // A shopping list

// // B
// const quotes = [
//   'I have no special talent. I am only passionately curious',
//   'Wisely, and slow. They stumble that run fast.',
//   'If you judge people, you have no time to love them.',
// ]

// // C
// const randomThings = [1, 10, 'Hello', true]
// randomThings[0]
// randomThings[2] = 'World'

// // D
// const ourClass = ['Salty', 'Zoom', 'Sardine', 'Slack', 'Github']
// ourClass[2]
// ourClass[4] = 'Octocat'
// ourClass.push('Cloud City')

// // E
// const myArray = [5, 10, 500, 20]
// myArray.push('Aegon', 'Hello')
// myArray.shift()
// myArray.unshift('Bob Marley')
// myArray.pop()
// myArray.reverse()
// /**
//  * Yes the array is mutated
//  * Mutate means altering the original
//  * It returned the array reversed
//  */

// // F
// const myInt = 22
// if (myInt < 100) {
//   console.log('little number')
// } else {
//   console.log('big number')
// }

// // G
// if (myInt < 5) {
//   console.log('little number')
// } else if (myInt > 10) {
//   console.log('big number')
// } else {
//   console.log('monkey')
// }

// // H
// const kristynsCloset = [
//   'left shoe',
//   'cowboy boots',
//   'right sock',
//   'GA hoodie',
//   'green pants',
//   'yellow knit hat',
//   'marshmallow peeps',
// ]

// const thomasCloset = [
//   [
//     'grey button-up',
//     'dark grey button-up',
//     'light blue button-up',
//     'blue button-up',
//   ],
//   ['grey jeans', 'jeans', 'PJs'],
//   ['wool mittens', 'wool scarf', 'raybans'],
// ]
// console.log(`Kristyn is rocking that ${kristynsCloset[2]} today`)
// kristynsCloset.splice(6, 0, 'raybans')
// kristynsCloset[5] = 'stained knit hat'

// console.log(
//   `Thom is looking fierce in a ${thomasCloset[0][0]}, ${thomasCloset[1][1]} and ${thomasCloset[2][2]}`
// )
// thomasCloset[2][2] = 'Footie Pajamas'

// // ===== SECTION IV =====
// // A
// const printGreeting = name => `Hello there ${name}`

// // B
// const printCool = name => `${name} is cool`

// // C
// const calculateCube = num => num * num * num

// // D
// const isVowel = letter => {
//   const vowels = ['a', 'e', 'i', 'o', 'u']
//   if (vowels.includes(letter.toLowerCase())) {
//     return true
//   } else {
//     return false
//   }
// }
// // console.log(isVowel('c'))

// // E
// const getTwoLengths = (str1, str2) => {
//   const output = []
//   output.push(str1.length, str2.length)
//   return output
// }

// // console.log(getTwoLengths('hello', 'bye'))

// // F
// const getMultipleLengths = arr => {
//   const output = []
//   arr.forEach(word => output.push(word.length))
//   return output
// }

// // console.log(getMultipleLengths(['Hello', 'how', 'are', 'you']))

// // G
// const maxOfThree = (...args) => {
//   let output = args[0]
//   args.forEach(num => {
//     if (num > output) {
//       output = num
//     }
//   })
//   return output
// }

// // console.log(maxOfThree(4, 8, 2))

// // H
// function printLongestWord(arr) {
//   let output = ''
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > output.length) {
//       output = arr[i]
//     }
//   }
//   return output
// }

// // console.log(
// //   printLongestWord(['apple', 'watermelon', 'peaches', 'fdkfjdkfjdkfjdfkjf'])
// // )

// // Objects
// const user = {
//   name: 'John Doe',
//   email: 'jdoe@mail.com',
//   age: 21,
//   purchases: [],
// }

// user.email = 'test@mail.com'
// user.age++
// user.location = '555 main st. Brooklyn NY'
// user.purchases.push('carbohydrates', 'piece of mind', 'merino jodhpurs')
// console.log(user.purchases[2])

// user.friend = {
//   name: 'Jane Doe',
//   age: 21,
//   location: '555 main st. Brookly NY',
//   purchases: [],
// }
// console.log(user.friend.name)
// console.log(user.friend.location)
// user.friend.age = 55
// user.friend.purchases.push('The One Ring', 'A latte')
// console.log(user.friend.purchases[1])
// user.purchases.forEach(item => console.log(item))
// user.friend.purchases.forEach(item => console.log(item))

// const updateUser = () => {
//   user.age++
//   user.name.toUpperCase()
// }

// const oldAndLoud = person => {
//   console.log(person)
//   person.age++
//   person.name.toUpperCase()
// }

// oldAndLoud(user)

// // ===== SECTION V =====
// const cat1 = {
//   name: 'bob',
//   breed: 'bobcat',
//   age: 3,
// }

// console.log(cat1.age)
// console.log(cat1.breed)

// const cat2 = {
//   name: 'big bob',
//   age: 5,
//   breed: 'bobcat',
// }

// // const combineCats = (cat1, cat2) => {
// //   console.log(cat1)
// //   console.log(cat2)
// // }

// // combineCats(cat1, cat2)

// const combineCats = (cat1, cat2) => {
//   return {
//     name: `${cat1.name}${cat2.name}`,
//     age: 1,
//     breed: `${cat1.breed}-${cat2.breed}`,
//   }
// }

// console.log(combineCats(cat1, cat2))

// console.log(
//   'Last:',
//   combineCats(
//     combineCats(cat1, cat2),
//     combineCats(cat1, cat2),
//     combineCats(cat1, cat2)
//   )
// )

// // Class Review

// class Hamster {
//   constructor(name) {
//     this.owner = ''
//     this.name = name
//     this.price = 15
//   }

//   wheelRun() {
//     console.log(`squeak squeak`)
//   }

//   eatFood() {
//     console.log('nibble nibble')
//   }

//   getPrice() {
//     return this.price
//   }
// }

// class Person {
//   constructor(name) {
//     this.name = name
//     this.age = 0
//     this.height = 0
//     this.weight = 0
//     this.mood = 0
//     this.hamsters = []
//     this.bankAccount = 0
//   }

//   getName() {
//     return this.name
//   }

//   getAge() {
//     return this.age
//   }

//   getWeight() {
//     return this.weight
//   }

//   greet() {
//     console.log('Hello ${this.name}')
//   }

//   eat() {
//     this.weight++
//     this.mood++
//   }

//   exercise() {
//     this.weight--
//   }

//   ageUp() {
//     this.age++
//     this.height++
//     this.weight++
//     this.mood--
//     this.bankAccount += 10
//   }

//   buyHamster(hamster) {
//     console.log('=========', hamster)
//     console.log('=========', hamster.getPrice)
//     this.hamsters.push(hamster)
//     this.mood += 10
//     this.bankAccount -= hamster.getPrice()
//   }
// }

// const billy = new Hamster('Billy')
// const christopher = new Person('chris')
// const buy = christopher.buyHamster(billy)

// const timmy = new Person('Timmy')
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()

// timmy.eat()
// timmy.eat()
// timmy.eat()
// timmy.eat()
// timmy.eat()

// timmy.exercise()
// timmy.exercise()
// timmy.exercise()
// timmy.exercise()
// timmy.exercise()

// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()
// timmy.ageUp()

// const gus = new Hamster('Gus')

// gus.owner = 'Timmy'

// timmy.buyHamster(gus)

// for (let i = 0; i < 15; i++) {
//   timmy.ageUp()
// }

// timmy.eat()
// timmy.eat()

// timmy.exercise()
// timmy.exercise()

// class Dinner {
//   constructor(appetizer, entree, dessert) {
//     this.appetizer = appetizer
//     this.entree = entree
//     this.dessert = dessert
//   }
// }

// class Chef {
//   newDinner(appetizer, entree, dessert) {
//     return new Dinner(appetizer, entree, dessert)
//   }
// }

// const chef = new Chef()
// const pizzaDinner = chef.newDinner('cheese sticks', 'pizza', 'cinnamon rolls')
// const fishDinner = chef.newDinner()

// class Dinner {
//   constructor(appetizer, entree, dessert) {
//     this.appetizer = appetizer
//     this.entree = entree
//     this.dessert = dessert
//   }
// }

// class Chef {
//   newDinner(appetizer, entree, dessert) {
//     return new Dinner(appetizer, entree, dessert)
//   }
// }

// const chefMike = new Chef()

// const chefsMexDinner = chefMike.newDinner('salsa and chips', 'tacos', 'flan')

// ===== easy going =====
for (let i = 1; i <= 20; i++) {
  // console.log(i)
}

// ===== get even =====
for (let i = 0; i <= 200; i += 2) {
  // console.log(i)
}

// ===== fizz buzz =====
for (let i = 1; i <= 100; i++) {
  // if (i % 15 === 0) console.log(`${i}: FizzBuzz`)
  // if (i % 5 === 0) console.log(`${i}: Buzz`)
  // if (i % 3 === 0) console.log(`${i}: Fizz`)
  // console.log(i)
}

// ===== wild wild life =====
const wolfy = ['Wolfy', 'wolf', 16, 'Yukon Territory']
const sharky = ['Sharky', 'shark', 20, 'Left Coast']
const plantee = ['Plantee', 'plant', 5000, 'Mordor']
const porgee = ['Porgee', 'Porg', 186, 'Ahch-To']
const dart = ["D'Art", 'Demogorgan Dog', 2, 'Upside Down']
plantee[2]++
// console.log(plantee)
wolfy[3] = 'Gotham City'
// console.log(wolfy)
dart.push('Hawkins')
// console.log(dart)
// for (let i = 0; i < wolfy.length; i++) {
//   wolfy[i] = wolfy[i].replace('wolf', 'Gameboy')
// }
// console.log(wolfy)

// ===== yell at the ninja turtles =====
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for (let turtle of ninjaTurtles) {
  // console.log(turtle.toUpperCase())
}

// ===== methods revisited =====
const favMovies = [
  'jaws',
  'the fellowhip of the ring',
  "howl's moving castle",
  'django',
  'titanic',
]
// console.log(favMovies.indexOf('titanic'))
favMovies.sort()
// console.log(favMovies)
// it permantly sorts the array of strings in alphabetic order
favMovies.pop()
favMovies.push('guardians of the galaxy')
favMovies.reverse()
// console.log(favMovies)
favMovies.shift()
// console.log(favMovies.unshift()) // 4
favMovies.splice(favMovies.indexOf('django'), 1, 'avatar')
// yes it alters the array
// console.log(favMovies)
// console.log(favMovies)
const lastHalf = favMovies.slice(Math.ceil(favMovies.length / 2)) //yes
// console.log(lastHalf)
// -1
// no, const is fine for changing values within an array

// ===== where is waldo =====
const whereIsWaldo = [
  ['timmy', 'frank'],
  'eggbert',
  ['lucinda', 'jacc', 'neff', 'snoop'],
  ['petunia', ['baked goods', 'waldo']],
]

whereIsWaldo.splice(1, 1)
whereIsWaldo[1][2] = 'No One'
// console.log(whereIsWaldo[2][1][1])

// console.log(whereIsWaldo)
const sayings = [
  'human... why are you taking pictures of me',
  'the catnip made me do it',
  'why does the red dot always get away',
]

const randomNumber = Math.floor(Math.random() * sayings.length)

// for (let i = 0; i < 20; i++) {
//   if (i % 2 === 0) {
//     console.log(sayings[randomNumber])
//   }
//   console.log('love me, pet me! hssssssss!')
// }

const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
]

let middle = Math.floor(nums.length / 2)
// console.log(nums[middle])

// ===== return of the closets =====
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

const kristynsShoe = kristynsCloset[0]
thomasCloset[2].push(kristynsShoe)
// console.log(thomasCloset[2])
const kristynOutfit1 = `Kristyn is wearing a ${kristynsCloset[3]}, some ${kristynsCloset[4]} and a ${kristynsCloset[5]}`

const thomasOutfit1 = `Thomas is wearing a ${thomasCloset[0][3]}, some ${thomasCloset[1][1]}, and some ${thomasCloset[2][2]}`
const thomasOutfit2 = `Thomas is wearing a ${thomasCloset[0][1]}, some ${thomasCloset[1][0]}, and some ${thomasCloset[2][0]}`

// kristynsCloset.forEach(clothing =>
//   console.log(`We're now washing: ${clothing}`)
// )

// thomasCloset.forEach(arr => console.log(arr))
