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
const menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog',
    href: '#',
    subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ],
  },
  {
    text: 'orders',
    href: '#',
    subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ],
  },
  {
    text: 'account',
    href: '#',
    subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ],
  },
]

// Task 3.1
menuLinks.forEach(item => {
  const anchor = document.createElement('a')
  anchor.setAttribute('href', item.href)
  anchor.textContent = item.text
  nav.appendChild(anchor)
})

// Task 4.0
const subMenuEl = document.querySelector('#sub-menu')
// 4.1
subMenuEl.style.height = '100%'
// 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
// 4.3
subMenuEl.classList.add('flex-around')
// 4.4
subMenuEl.style.position = 'absolute'
// 4.5
subMenuEl.style.top = '0'
// 5.0 Done
// 5.1
const topMenuLinks = document.querySelectorAll('a')
const showingSubMenu = false
// 5.2
// addEventListener
nav.addEventListener('click', e => {
  e.preventDefault()
  if (e.target.tagName !== 'A') return
  console.log(e.target.innerText)
})
