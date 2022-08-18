// ===== Ex. 1 =====

console.log('Ex. 1')

class Cat {
  constructor(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
  }

  eat() {
    console.log(`${this.name} is eating`)
  }

  birthday() {
    console.log(
      `It's ${this.name}'s birthday and ${
        this.sex.toLowerCase() === 'male' ? 'he' : 'she'
      } is ${(this.age += 1)}`
    )
  }

  takesNap() {
    console.log(`${this.name} is taking a nap`)
  }
}

const sam = new Cat('Sam', 8, 'Male')
console.log(sam)
sam.eat()
sam.birthday()
sam.takesNap()

console.log('\n')

const lucy = new Cat('Lucy', 6, 'Female')
console.log(lucy)
lucy.eat()
lucy.birthday()
lucy.takesNap()

console.log('\n')

// ===== Ex. 2 =====

console.log('Ex. 2')

class Pirate {
  constructor(name, power, secretWeapon) {
    this.name = name
    this.power = power
    this.secretWeapon = secretWeapon
    this.takesSoul = false
  }

  getsHit() {
    console.log(
      `${this.name} was just hit and their power is ${(this.power -= 10)}`
    )
  }

  powerUp() {
    console.log(`${this.name} just powered up to ${(this.power += 10)}`)
  }

  soulSnatched() {
    this.takesSoul = true
    console.log(`${this.takesSoul && "Just took someone's soul"}`)
  }
}

const jollyRoger = [
  new Pirate('Jax The Ripper', 100, 'Machete with poison'),
  new Pirate('Wave Crasher', 90, 'Controller of water'),
  new Pirate('Crazy Pirate', 93, 'Paralizes with his thoughts'),
]

jollyRoger[0].powerUp()

jollyRoger.forEach(pirate => {
  console.log(
    `Name: ${pirate.name} \n Power: ${pirate.power} \n Secret Weapon: ${pirate.secretWeapon}`
  )
})

console.log('\n')

const blackPearl = [
  new Pirate('Death Pearl', 100, 'Spits pearls of death'),
  new Pirate('Wave Crasher', 90, 'Controller of water'),
  new Pirate('Crazy Pirate', 93, 'Paralizes with his thoughts'),
]

blackPearl.forEach(pirate => {
  console.log(
    `Name: ${pirate.name} \n Power: ${pirate.power} \n Secret Weapon: ${pirate.secretWeapon}`
  )
})

console.log('\n')

// ===== Ex. 3 =====

console.log('Ex. 3')

class Car {
  constructor(number) {
    this.number = number
  }
}

const freighter = []
for (let i = 0; i < 100; i++) {
  freighter.push(new Car(i))
}

console.log(freighter)

console.log('\n')

// ===== Ex. 4 =====

console.log('Ex. 4')

class Governor {
  static hasOffice = true
  static writesLaws = true

  static pressConference() {
    console.log('Giving press conference')
  }

  static addressPeople() {
    console.log('Addressing people in the state')
  }
}

class Person {
  constructor(breath, drink, eat) {
    Person.breath = breath
    Person.drink = drink
    Person.eat = eat
  }

  static isBreating() {
    console.log("I'm breating")
  }

  static isDrinking() {
    console.log("I'm drinking")
  }

  static isEating() {
    console.log("I'm eating")
  }
}

class PostalWorker extends Person {
  constructor(name) {
    super()
    this.name = name
  }

  openMailbox() {
    return `${this.name} is opening the mailbox`
  }

  checksName() {
    return `${this.name} is checking name on mail`
  }

  deliveringMail() {
    return `${this.name} is delivering the mail`
  }
}

const Arrj = new PostalWorker('Aranjyothi')

console.log(Arrj.openMailbox())
console.log(Arrj.checksName())
console.log(Arrj.deliveringMail())

console.log('\n')

const Chris = new PostalWorker('Chris')
console.log(Chris.openMailbox())
console.log(Chris.checksName())
console.log(Chris.deliveringMail())

class Chef extends Person {
  constructor(name, food) {
    super()
    this.name = name
    this.food = food
  }
  preparesFood() {
    return `chef ${this.name} preparing ${this.food}`
  }

  cooksFood() {
    return `chef ${this.name} is cooking ${this.food}`
  }

  presentsFood() {
    return `chef ${this.name} presents ${this.food}`
  }
}

console.log('\n')

const Joshua = new Chef('Joshua', 'pizza')
console.log(Joshua)
console.log(Joshua.preparesFood())
console.log(Joshua.cooksFood())
console.log(Joshua.presentsFood())

console.log('\n')

const John = new Chef('John', 'chicken curry')
console.log(John)
console.log(John.preparesFood())
console.log(John.cooksFood())
console.log(John.presentsFood())

console.log('\n')

// ===== Ex. 5 =====

console.log('Ex. 5')

class BankAccount {
  constructor(ownerName, balance) {
    this.ownerName = ownerName
    this.balance = balance
    this.acctNum = new Date().getMilliseconds()
  }

  deposit(amount) {
    return `You deposited $${amount} and your new balance is $${
      this.balance + amount
    }`
  }

  withdraw(amount) {
    return `You withdrew $${amount} and your new balance is $${
      this.balance - amount
    }`
  }
}

const chrisAccount = new BankAccount('Chris', 100)

class CheckingAccount extends BankAccount {
  constructor(ownerName, balance) {
    super(ownerName, balance)
    this.overDraftEnabled = true
    this.balance = balance
  }

  withdraw(amount) {
    if (this.balance < amount) {
      return `Insuficient Funds: Sorry but your current balance is $${this.balance} and you are requesting to withdraw $${amount}`
    }
    return super.withdraw()
  }
}

const chrisChecking = new CheckingAccount('Chris', 150)
console.log(chrisChecking.withdraw(250))

class SavingsAccount extends BankAccount {
  constructor(ownerName, balance) {
    super(ownerName, balance)
    this.ownerName = ownerName
    this.balance = balance
  }

  withdraw() {
    return `Sorry ${this.ownerName}, but withdraws are not allowd from this account`
  }
}

const chrisSavings = new SavingsAccount('Chris')
console.log(chrisSavings.withdraw())
