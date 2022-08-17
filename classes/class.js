class Vehicle {
  constructor(make, model, year, vin) {
    this.make = make
    this.model = model
    this.year = year
    this.vin = vin
    this.running = false
    console.log(make, model, year, vin)
  }

  goVroom() {
    console.log(`${this.model} goes..... vroooooommmmm!!!!! vrooooommmmm!!!`)
  }

  start() {
    this.running = true
    console.log('running')
  }

  stop() {
    this.running = false
    console.log(
      `${this.make} ${this.model} ${
        this.running ? 'Is running' : 'Is NOT running'
      }`
    )
  }

  toString() {
    return `Vehicle ${this.vin} is a ${this.make} model ${this.model}`
  }
}

const ford = new Vehicle('ford', 'f-150', '2017', 'A001')
// ford.goVroom()
// ford.start()
ford.stop()

const honda = new Vehicle('honda', 'civic', '2016', 'A002')

// ========== BREAK ==========

// class User {
//   constructor(name) {
//     this.name = name
//   }

//   sayHi() {
//     console.log(`Hello ${this.name}`)
//   }

//   sayGoodbye() {
//     console.log(`Goodbye ${this.name}`)
//   }
// }

// let user = new User('Chris')
// user.sayHi()
// user.sayGoodbye()

// let user2 = new User('John')
// user2.sayHi()
// user.sayGoodbye()
