// Loops
// break breaks out of a loop
// continue skips a iteration and goes to the next iteration

// from 10 to 1

// Ex. 1
for (let i = 10; i > 0; i--) {
  console.log(i)
}

// Ex. 2
// 1,3,5,7,9 2,4,6,8,10
for (let i = 1; i < 10; i += 2) {
  console.log(i)
}

for (let i = 2; i <= 10; i += 2) {
  console.log(i)
}

// Ex. 3
for (let i = 6; i <= 60; i += 3) {
  console.log(i)
}

// Ex. 4
// version 1
let str = ''
for (let i = 1; i <= 7; i++) {
  str += '#'
  console.log(str)
}

// version 2
for (let i = 1; i <= 7; i++) {
  let step = ''

  for (let j = 0; j < i; j++) {
    step += '#'
  }

  console.log(step)
}
