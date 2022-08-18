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
