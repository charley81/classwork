let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
]

document.addEventListener('DOMContentLoaded', function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`
  }
  randomQuote()

  // Do all of your work inside the document.addEventListener

  // Part 1
  const mainTitle = document.querySelector('#main-title')
  mainTitle.textContent = 'something shorter'

  // Part 2
  document.body.style.backgroundColor = '#FEFCFB'

  // Part 3
  // var listElements = document.querySelectorAll('#favorite-things li')
  // for (var i = 0; (li = listElements[i]); i++) {
  //   if (i === listElements.length - 1) {
  //     li.parentNode.removeChild(li)
  //   }
  // }
  const favThings = document.querySelector('#favorite-things')
  const lastItem = favThings.querySelector('li:last-child')
  favThings.removeChild(lastItem)

  // Part 4
  const specialTitles = document.querySelectorAll('.special-title')
  specialTitles.forEach(item => (item.style.fontSize = '2rem'))

  // Part 5
  const pastRaces = document.querySelector('#past-races')
  for (let i = 0; i < pastRaces.children.length; i++) {
    if (pastRaces.children[i].textContent === 'Chicago') {
      pastRaces.children[i].remove()
    }
  }

  // Part 6
  const li = document.createElement('li')
  li.textContent = 'Charlotte'
  pastRaces.append(li)

  // Part 7
  const newDiv = document.createElement('div')
  newDiv.classList.add('blog-post', 'purple')
  const newH2 = document.createElement('h1')
  newH2.textContent = 'Charlotte'
  const newP = document.createElement('p')
  newP.textContent = 'this is the subtitle text'
  newDiv.appendChild(newH2)
  newDiv.appendChild(newP)
  const domAventures = document.querySelector('#dom-adventures')
  domAventures.after(newDiv)

  // Part 8
  const quoteTitle = document.querySelector('#quote-title')
  quoteTitle.addEventListener('click', () => {
    randomQuote()
  })

  // Part 9
  const blogPosts = document.querySelectorAll('.blog-post')
  blogPosts.forEach(item => {
    item.addEventListener('mouseenter', () => item.classList.toggle('red'))
    item.addEventListener('mouseout', () => item.classList.toggle('purple'))
  })
})
