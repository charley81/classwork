// Ex. 1
const fizzBuzz = (startingNumber, endingNumber) => {
  const result = []
  for (let i = startingNumber; i <= endingNumber; i++) {
    if (i % 15 === 0) {
      result.push('fizzBuzz')
    } else if (i % 5 === 0) {
      result.push('Buzz')
    } else if (i % 3 === 0) {
      result.push('Fizz')
    }

    result.push(i)
  }
  result.forEach(num => console.log(num))
  return result
}

// fizzBuzz(1, 100)

// Ex. 2
const quatersBack = (paid, cost) => {
  return `You will recieve ${(cost - paid) * 4} quaters back`
}

// console.log(quatersBack(4, 10))

// Ex. 3
// const billsRevieved = (paid, cost) => {
//   let change = paid * 100 - cost * 100

//   console.log(change)

//   let fifty = 0
//   let twenty = 0
//   let ten = 0
//   let five = 0
//   let one = 0
//   let quater = 0
//   let dime = 0
//   let nickle = 0
//   let penny = 0

//   if (change > 50) {
//     fifty += 1
//     change -= 50
//   } else if ()
// }

// billsRevieved(100, 27.83)

const myArr = Array.from(Array(100).keys())
