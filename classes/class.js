// // class Vehicle {
// //   constructor(make, model, year, vin) {
// //     this.make = make
// //     this.model = model
// //     this.year = year
// //     this.vin = vin
// //     this.running = false
// //     console.log(make, model, year, vin)
// //   }

// //   goVroom() {
// //     console.log(`${this.model} goes..... vroooooommmmm!!!!! vrooooommmmm!!!`)
// //   }

// //   start() {
// //     this.running = true
// //     console.log('running')
// //   }

// //   stop() {
// //     this.running = false
// //     console.log(
// //       `${this.make} ${this.model} ${
// //         this.running ? 'Is running' : 'Is NOT running'
// //       }`
// //     )
// //   }

// //   toString() {
// //     return `Vehicle ${this.vin} is a ${this.make} model ${this.model}`
// //   }
// // }

// // const ford = new Vehicle('ford', 'f-150', '2017', 'A001')
// // // ford.goVroom()
// // // ford.start()
// // ford.stop()

// // const honda = new Vehicle('honda', 'civic', '2016', 'A002')

// // ========== BREAK ==========

// // class User {
// //   constructor(name) {
// //     this.name = name
// //   }

// //   sayHi() {
// //     console.log(`Hello ${this.name}`)
// //   }

// //   sayGoodbye() {
// //     console.log(`Goodbye ${this.name}`)
// //   }
// // }

// // let user = new User('Chris')
// // user.sayHi()
// // user.sayGoodbye()

// // let user2 = new User('John')
// // user2.sayHi()
// // user.sayGoodbye()

// class Character {
//   constructor(name, age, origin) {
//     this.name = name
//     this.age = age
//     this.origin = origin
//     console.log('inside of Character constructor')
//   }

//   greet() {
//     console.log(`${this.name} is saying hello`)
//   }

//   eat() {
//     console.log(`${this.name} is eating`)
//   }
// }

// class Hobbit extends Character {
//   constructor(name, age, eyes, hair) {
//     super(eyes)
//     console.log('inside of Hobbit constructor')
//   }
//   steal() {
//     console.log("I'm stealing")
//   }

//   eat() {
//     console.log(`lets is eating`)
//     super.greet()
//   }
// }

// const frodo = new Hobbit('frodo', 99, 'waynes world')
// frodo.eat()

// const jimmy = new Character('jimmy', 99, 'jims world', 'purple')

class Animal {
  constructor(name) {
    this.speed = 0
    this.name = name
  }

  run(speed) {
    this.speed = speed
    alert(`${this.name} runs with speed ${this.speed}`)
  }

  stop() {
    this.speed = 0
    alert(`${this.name} stands still`)
  }
}

let dog = new Animal('Kujo')

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name)
    this.speed = 0
    this.earLength = earLength
  }

  hide() {
    alert(`${this.name} hides!`)
  }

  stop() {
    super.stop()
    this.hide()
  }
}

let billy = new Rabbit('Billy', 10)
// console.log(billy)
let jack = new Rabbit('Jack')
// jack.run(5)

class User {
  static staticMethod() {
    console.log(this === User)
  }
}

// User.staticMethod()

class Article {
  constructor(title, date) {
    this.title = title
    this.date = date
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date
  }

  static createTodays() {
    // this = Article
    return new this("Today's digest", new Date())
  }
}

// usage
let articles = [
  new Article('HTML', new Date(2022, 1, 1)),
  new Article('CSS', new Date(2022, 0, 1)),
  new Article('Javascript', new Date(2022, 11, 1)),
]

articles.sort(Article.compare)
// console.log(articles[2].title)
let article = Article.createTodays()
// console.log(article.title)

class CoffeeMachine {
  _waterAmount = 0 // the amount of water inside

  set waterAmount(value) {
    if (value < 0) {
      value = 0
    }
    this._waterAmount = value
  }

  get waterAmount() {
    return this._waterAmount
  }

  constructor(power) {
    this._power = power
  }
}

// create coffee machine
let coffeeMachine = new CoffeeMachine(100)

// add water
coffeeMachine.waterAmount = -10

const Per = function (firstName, birthYear) {
  this.firstName = firstName
  this.birthYear = birthYear
}

const chris = new Per('Chris', 1981)

// 1. new {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
  }

  calcAge() {
    console.log(2037 - this.birthYear)
  }
}

const jessie = new PersonCl('Jessie', 1921)

// OBJECT FACTORY

class Car {
  constructor(maker, serialNumber) {
    this.serialNumber = serialNumber
    this.maker = maker
  }

  drive() {
    console.log(`skkkkkkkrrrrrrrrrrtttttt`)
  }
}

class Facrtory {
  constructor(company) {
    this.company = company
    this.cars = []
  }

  generateCar() {
    const newCar = new Car(this.company, this.cars.length)
    this.cars.push(newCar)
  }

  findCar(index) {
    return this.cars[index]
  }
}

const tesla = new Facrtory('Tesla')

for (let i = 0; i < 100; i++) {
  tesla.generateCar()
}

console.log(tesla)
console.log(tesla.findCar(99))
