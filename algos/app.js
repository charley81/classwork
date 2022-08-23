// Ex. 1
const findShort = str => {
  const strSplit = str.split(' ')
  let result = strSplit[0].length

  strSplit.forEach(word => {
    if (word.length < result) {
      result = word.length
    }
  })

  return result
}

findShort('bitcoin take over the world maybe who knows perhaps')

// Ex. 2
const switcheroo = str =>
  str
    .split('')
    .map(letter =>
      letter === 'a'
        ? letter.replace('a', 'b')
        : letter === 'b'
        ? letter.replace('b', 'a')
        : letter
    )
    .join('')

switcheroo('abc') //'bac'
switcheroo('aaabcccbaaa') // 'bbbacccabbb'
switcheroo('ccccc') // 'ccccc'

// ===== breaking the records =====
function breakingRecords(scores) {
  // create var for highest score and set to first game
  let highestScore = scores[0]
  // create var for lowest score
  let lowestScore = 0
  // create var for max record times
  let brokenMax = 0
  // create var for min record times
  let brokenMin = 0
  // loop over array of scores/games
  for (let i = 0; i < scores.length; i++) {
    // check if current score is greater than the current high score
    // if so update highest score to the current score and increment broken max var
    if (scores[i] > highestScore) {
      highestScore = scores[i]
      brokenMax++
    } else {
      // if current score is not greater than highest score then it's a low score and update lowest score var to be current score
      lowestScore = scores[i]
    }
    // check if the next game score is less than the current game score and if so increment the broken min var
    if (scores[i + 1] < scores[i]) {
      brokenMin++
    }
  }

  return [brokenMax, brokenMin]
}

// first line: number of games
// second line: each games scoring
breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])
