// which is faster
// memory usage
// readability

function addUpTo(n) {
  let total = 0
  for (let i = 0; i <= n; i++) {
    total += i
  }
  return total
}

function addUpTo2(n) {
  return (n * (n + 1)) / 2
}

let startTime = performance.now()
console.log(addUpTo2(2000000000))
let endTime = performance.now()
console.log(`this took ${(endTime - startTime) / 1000}`)
