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

// Task 5.0
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
const topMenuLinks = nav.querySelectorAll('a')

let showingSubMenu = false
// 5.2
nav.addEventListener('click', e => {
  e.preventDefault()
  if (e.target.tagName !== 'A') return
  // 5.3
  console.log(e.target.textContent)
})
