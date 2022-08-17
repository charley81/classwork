// ===== Ex. 1 =====
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

const lucy = new Cat('Lucy', 6, 'Female')
console.log(lucy)
lucy.eat()
lucy.birthday()
lucy.takesNap()

console.log('========== Break ===========')

// ===== Ex. 2 =====
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

jollyRoger.forEach(pirate => {
  console.log(
    `Name: ${pirate.name} \n Power: ${pirate.power} \n Secret Weapon: ${pirate.secretWeapon}`
  )
})

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

console.log('========== Break ===========')

// ===== Ex. 3 =====
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
