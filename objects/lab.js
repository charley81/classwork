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

let getChange = function (paid, cost) {
  paid *= 100
  cost *= 100

  let change = paid - cost //7,217

  let money = {
    hundred: 0, //10,000
    fifty: 0, // 5,000
    twenties: 0, // 2,000
    tens: 0, // 1,000
    fives: 0, // 500
    singles: 0, // 100
    quaters: 0, // 25
    dimes: 0, // 10
    nickles: 0, // 5
    pennies: 0, //1
  }

  for (let i = change; i >= 0; i--) {
    if (change > 10000) {
      money.hundred++
      change -= 10000
    } else if (change > 5000) {
      money.fifty++
      change -= 5000
    } else if (change > 2000) {
      money.twenties++
      change -= 2000
    } else if (change > 1000) {
      money.tens++
      change -= 1000
    } else if (change > 500) {
      money.fives++
      change -= 500
    } else if (change > 100) {
      money.singles++
      change -= 100
    } else if (change > 25) {
      money.quaters++
      change -= 25
    } else if (change > 10) {
      money.dimes++
      change -= 10
    } else if (change > 5) {
      money.nickles++
      change -= 5
    } else if (change > 1) {
      money.pennies++
      change -= 1
    }
  }

  const result = `Your change is ${money.hundred} hundreds, ${money.fifty} fifties, ${money.twenties} twenties, ${money.tens} tens, ${money.fives} fives, ${money.singles} ones, ${money.quaters} quaters, ${money.dimes} dimes, ${money.nickles} nickles, ${money.pennies} pennies`

  console.log(result)

  return result
}

getChange(100, 27.83)
