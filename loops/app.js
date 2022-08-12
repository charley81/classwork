// // Loops
// // break breaks out of a loop
// // continue skips a iteration and goes to the next iteration

// // from 10 to 1

// // Ex. 1
// for (let i = 10; i > 0; i--) {
//   console.log(i)
// }

// // Ex. 2
// // 1,3,5,7,9 2,4,6,8,10
// for (let i = 1; i < 10; i += 2) {
//   console.log(i)
// }

// for (let i = 2; i <= 10; i += 2) {
//   console.log(i)
// }

// // Ex. 3
// for (let i = 6; i <= 60; i += 3) {
//   console.log(i)
// }

// // Ex. 4
// // version 1
// let str = ''
// for (let i = 1; i <= 7; i++) {
//   str += '#'
//   console.log(str)
// }

// // version 2
// for (let i = 1; i <= 7; i++) {
//   let step = ''

//   for (let j = 0; j < i; j++) {
//     step += '#'
//   }

//   console.log(step)
// }

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i)
//   }
// }

// // ===== WHILE LOOPS =====

// // Ex. 1
// let num1 = 0

// while (num1 <= 35) {
//   // console.log(num1)
//   num1 += 3
// }

// // Ex. 2
// let num2 = 5
// while (num2 <= 100) {
//   // console.log(num2)
//   num2 += 5
// }

// // Ex. 3
// let num3 = 0
// while (num3 <= 20) {
//   if (num3 % 2 === 0) {
//     // console.log(num3 * 3)
//   }
//   num3++
// }

// // Ex. 4
let pri = 2
let num = 0
let num1 = 0
while (pri <= 20) {
  num = pri - 1
  while (num > 1) {
    if (pri % num === 0) {
      num1++
    }
    num--
  }

  if (num1 === 0) {
    console.log(pri)
  }
  num1 = 0
  pri++
}

// Ex. 5
let num5 = 1

while (num5 <= 6) {
  console.log(num5 * 4)
  num5++
}

let num5 = 10
let coins = 0
while (num5 > 4) {
  console.log((coins += 4))
  num5--
}

// Ex. 6
let paid = 27.83
while (paid <= 100) {
  paid += 0.01
}

// Ex. 7
// 10, 30, 50, 70, 90 20, 40, 60, 80 100
// let num = 10
// while (num <= 100) {
//   console.log(num)
//   num += 20
//   if (num === 90) {
//     console.log(num)
//     num = 20
//   }
// }

// // Ex. 8
// let num8 = 500
// while (num8 <= 800) {
//   if (num8 % 4 === 0) {
//     console.log(num8)
//   }
//   num8++
// }
