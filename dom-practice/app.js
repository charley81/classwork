// const pEl = document.querySelector('.cool')
// const title = document.querySelector('#title')

// pEl.innerHTML = 'Changed this text to say this'

// console.log(pEl)
// console.log(pEl.innerHTML)
// console.log(pEl.textContent)
// console.log(pEl.innerText)

// pEl.style.rotate = '-4deg'
// title.style.marginBottom = '1rem'
// pEl.style.color = '#4B7BEC'

// // get attribute (name)
// // set attribute (name, value)
// // has attribute (name)
// // classList

// const link = document.querySelector('.link')
// link.setAttribute('href', 'http://www.google.com')
// link.classList.add('google-link')
// // console.log(link.classList.contains('link'))

// const liTags = document.querySelectorAll('.list-item')
// const liTags2 = document.getElementsByTagName('li')
// const liTags3 = document.getElementsByClassName('list-item')

// liTags.forEach(item => {
//   console.log(item)
//   item.style.color = '#DCDEE3'
//   // item.style.fontSize = '30px'
// })

const mainEl = document.querySelector('main')
const nav = document.querySelector('#top-menu')

// Task 1.0
mainEl.style.backgroundColor = 'var(--main-bg)'
const mainH1 = document.createElement('h1')
mainH1.textContent = 'SEI Rocks!'
mainEl.append(mainH1)
mainEl.classList.add('flex-ctr')

// Task 2.0
nav.style.height = '100%'
nav.style.backgroundColor = 'var(--top-menu-bg)'
nav.classList.add('flex-around')

// Task 3.0
var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
]

// Task 3.1
menuLinks.forEach(item => {
  const anchor = document.createElement('a')
  anchor.setAttribute('href', item.href)
  anchor.textContent = item.text
  nav.appendChild(anchor)
})
