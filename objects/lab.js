const characterCounter = str => {
  let output = {}

  for (let i = 0; i < str.length; i++) {
    output[str[i]] = output[str[i]]
      ? (output[str[i]] += 1)
      : (output[str[i]] = 1)
  }

  return output
}

characterCounter('helloooooo')
// h: 1 e: 1

// let getChange = function (paid, cost) {
//   paid *= 100
//   cost *= 100
//   console.log(100 * 100)
//   const change = paid - cost

//   let money = {
//     hundred: 0,
//     fifty: 0,
//     twenties: 0,
//     tens: 0,
//     fives: 0,
//     singles: 0,
//     quaters: 0,
//     dimes: 0,
//     nickles: 0,
//     pennies: 0,
//   }

//   while (change) {
//     if (change >= 10000) {
//       money.hundred++
//       change -= 10000
//     } else if (change >= 5000) {
//       money.fifty++
//       change -= 5000
//     }
//   }

//   console.log(change)
// }

// getChange(100, 27.83)
