// // Ex. 1
// const varOne = 5
// const varTwo = 6
// const varThree = varOne + varTwo

// // Ex. 2
// const varFour = 9
// const varFive = 12
// const varSix = 15
// const multiplyNums = varFour * varFive
// const divideNums = varTwo / varOne

// // Ex. 3
// const var1 = 2
// const var2 = 4
// const var3 = 6
// const var4 = 8
// const var5 = 10
// const var6 = 12
// const var7 = 14
// const var8 = 16
// const var9 = 18
// const var10 = 20
// const firstFive = var1 + var2 + var3 + var4 + var5
// const secondFive = var6 + var7 + var8 + var9 + var10
// const firstFiveAverage = firstFive / 5
// const secondFiveAverage = secondFive / 5
// const totalSum = firstFive + secondFive / 10

// const nums = [var1, var2, var3, var4, var5, var6, var7, var8, var9, var10]

// function exerciseThreeAverage(numsArr, length) {
//   let average = 0
//   for (let i = 0; i < length; i++) {
//     average += numsArr[i]
//   }
//   return average
// }

// exerciseThreeAverage(nums)

// // Ex. 4
// function findAverage(...nums) {
//   let average = 0

//   for (let i = 0; i < nums.length; i++) {
//     average += nums[i]
//   }

//   return average / nums.length
// }

// findAverage(4, 10, 22, -30, 55)
// findAverage(68, 7, -22, 9, 100)

// let box1 = 'hello'
// let box2 = 'class'
// let box3

// box3 = box1 // hello
// box1 = box2 // class
// box2 = box3 // hello

// // conditionals
// // Ex.1
// let num = 5
// if (num >= 0) {
//   console.log('true')
// } else {
//   console.log('false')
// }

// // Ex.2
// num = -5
// if (num >= 0) {
//   console.log('true')
// } else {
//   console.log('false')
// }

// // Ex.3
// const userUnderAge = 17
// const userOfAge = 18

// if (userOfAge >= 18) {
//   console.log('You have access')
// } else {
//   console.log('Access denied')
// }

// const checkAccess = age => (age >= 18 ? 'Access Granted' : 'Access Denied')

// function checkAccess2(age) {
//   if (age >= 18) {
//     return 'Access Granted'
//   }

//   return 'Access Denied'
// }

// // nested conditionals
// // Ex.1
// let num1 = 0

// if (num >= 0) {
//   if (num > 100) {
//     console.log('greater than 100')
//   } else {
//     console.log('less than 100')
//   }
// } else {
//   console.log('number is negative')
// }

// const grade = 54
// if (grade >= 90) {
//   console.log('A')
// } else if (grade >= 80) {
//   console.log('B')
// } else if (grade >= 70) {
//   console.log('C')
// } else if (grade >= 55) {
//   console.log('D')
// } else {
//   console.log('F')
// }

// if (grade >= 90) console.log('A')
// if (grade >= 80) console.log('B')
// if (grade >= 70) console.log('C')
// if (grade >= 55) console.log('D')
// if (grade < 55) console.log('F')

// const num3 = 5
// console.log(num3 % 2 === 0)

// let global = 'global'

// if (true) {
//   // block scope
//   let blockScoped = 'block'

//   if (true) {
//     // nested block scope
//     const nestedBlockScope = 'nested'
//   }
// }
