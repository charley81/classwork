// Arrays
const leaners = ['sami', 'chris', 24]
const learners2 = ['john', 'jane', 'jim']
leaners.push(true)

console.log(leaners)

// push method => adds to end of array
// pop method => removes last item of array
// shift method => removes first item of array
// unshift method => adds to beginning of array
// These methods mutate the array

// spread operator
let everybody = [...leaners, ...learners2]
console.log(everybody)

// rest parameters
function add(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
  }
}

add(4, 6, 2, 7, 1, 4)
