// Ex. 1
function maxOfTwoNumbers(a, b) {
  if (a === b) {
    return a
  } else if (a > b) {
    return a
  } else {
    return b
  }
}

// console.log(maxOfTwoNumbers(10, 15))

// Ex. 2
const maxOfThree = function (a, b, c) {
  if (a >= b) {
    if (a >= c) {
      return a
    } else {
      return c
    }
  } else if (b >= c) {
    return b
  }

  return c
}

// console.log(maxOfThree(55, 65, 77))

// Ex. 3
function isCharAVowel(let) {
  const letLower = let.toLowerCase()
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] === letLower) {
      return true
    } else {
      return false
    }
  }
}

// console.log(isCharAVowel('A'))
// console.log(isCharAVowel('B'))

// Ex. 4
const sumArray = function (numbers) {
  let output = 0

  for (let i = 0; i < numbers.length; i++) {
    output += numbers[i]
  }

  return output
}

// console.log(sumArray([5, 6, 8, 7, 1, 2]))

// Ex. 5
const multiplyArray = function (numbers) {
  let output = 1

  for (let i = 0; i < numbers.length; i++) {
    output *= numbers[i]
  }

  return output
}

// console.log(multiplyArray([5, 6, 8, 7, 1, 2]))

// Ex. 6
function numArgs(...rest) {
  return rest.length
}

// console.log(numArgs(true, 'blue', 123, 345))

// Ex. 7
function reverseString(str) {
  let output = []

  for (let i = str.length; i >= 0; i--) {
    output.push(str[i])
  }

  return output.join('')
}

// console.log(reverseString('Hello'))

// Ex. 8
const longestStringInArray = function (strs) {
  let output = strs[0].length
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length > output) {
      output = strs[i].length
    }
  }

  return output
}

// console.log(
//   longestStringInArray([
//     'hello',
//     'dfdfdkfdjfdkfjdkfjdfkdjfkdf',
//     'world',
//     'buy',
//     'compress',
//     'reallylongword',
//   ])
// )

// Ex. 9
function stringsLongerThan(strs, num) {
  let output = []
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length > num) {
      output.push(strs[i])
    }
  }

  return output
}

// console.log(
//   stringsLongerThan(
//     [
//       'hello',
//       'dfdfdkfdjfdkfjdkfjdfkdjfkdf',
//       'world',
//       'buy',
//       'compress',
//       'reallylongword',
//     ],
//     6
//   )
// )

// Ex. 10
function addList(...args) {
  if (!args) return 0

  let sum = 0

  for (let i = 0; i < args.length; i++) {
    sum += args[i]
  }

  return sum
}

// console.log(addList(null))
// console.log(addList(1, 50, 1.23))

// Ex. 3
function isCharAVowel2(char) {
  if (
    char === 'a' ||
    char === 'e' ||
    char === 'i' ||
    char === 'o' ||
    char === 'u'
  ) {
    return true
  }

  return false
}

// console.log(isCharAVowel2('b'))

// Ex. 4
const sumArray2 = function (arr) {
  let output = 0

  for (let i = 0; i < arr.length; i++) {
    output += arr[i]
  }

  return output
}

// console.log(sumArray2([6, 7, 3, 2, 1, 9]))

// Ex. 5
function multiplyArray2(arr) {
  let output = 1

  for (let num of arr) {
    output *= num
  }

  return output
}

// console.log(multiplyArray2([2, 4, 5]))

// Ex. 6
const numArgs2 = function (items) {
  return items.length
}

// console.log(numArgs('item1', true, false, 1, 2, 3))

// Ex. 7
function reverseString2(str) {
  const output = []

  for (let i = str.length - 1; i >= 0; i--) {
    output.push(str[i])
  }

  return output.join('')
}

// console.log(reverseString2('Hello'))

// Ex. 8
const longestStringInArray2 = function (arr) {
  let longestLength = arr[0].length

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestLength) {
      longestLength = arr[i].length
    }
  }

  return longestLength
}

// console.log(longestStringInArray2(['hello', 'bye', 'fdffdfdfdfdf', 'yo']))

// Ex. 9
function stringsLongerThan2(arr, num) {
  const output = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > num) {
      output.push(arr[i])
    }
  }

  return output
}

// console.log(stringsLongerThan2(['hello', 'bye', 'fdffdfdfdfdf', 'yo'], 3))

// Bonus
function addList(...nums) {
  if (!nums) return 0

  let output = 0

  for (let i = 0; i < nums.length; i++) {
    output += nums[i]
  }

  return output
}
// console.log(addList()) // 0

// console.log(addList(1, 50, 1.23)) // 52.23
