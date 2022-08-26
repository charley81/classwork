// global
const mainEl = document.querySelector('main')
const nav = document.querySelector('#top-menu')
const subMenuEl = document.querySelector('#sub-menu')
const topMenuLinks = nav.querySelectorAll('a')
let showingSubMenu = false

// menuLinks => array of objects for nav links
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

mainEl.style.backgroundColor = 'var(--color-dark)'
const mainH1 = document.createElement('h1')
mainH1.textContent = 'SEI Rocks!'
mainEl.append(mainH1)
mainEl.classList.add('flex-ctr')
nav.style.height = '100%'
nav.style.backgroundColor = 'var(--color-grey-dark)'
nav.classList.add('flex-around')

menuLinks.forEach(item => {
  const anchor = document.createElement('a')
  anchor.setAttribute('href', item.href)
  anchor.textContent = item.text
  nav.appendChild(anchor)
})

subMenuEl.style.height = '100%'
subMenuEl.style.backgroundColor = 'var(--color-grey-light)'
subMenuEl.classList.add('flex-around')
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0'

nav.addEventListener('click', e => {
  e.preventDefault()
  if (e.target.tagName !== 'A') return

  if (e.target.classList.contains('active')) {
    e.target.classList.remove('active')
    showingSubMenu = false
    subMenuEl.style.top = '0'
    return
  }

  topMenuLinks.forEach(item => item.classList.remove('active'))
  e.target.classList.add('active')
  let linkObj
  menuLinks.forEach(item => {
    if (item.text === e.target.textContent) {
      linkObj = item
      if (item.hasOwnProperty('subLinks')) {
        showingSubMenu = true
      } else {
        showingSubMenu = false
      }
    }
  })
  if (showingSubMenu) {
    buildSubMenu(linkObj.subLinks)
  } else {
    subMenuEl.style.top = '0'
  }
})

const buildSubMenu = obj => {
  subMenuEl.style.top = '100%'
  subMenuEl.textContent = ''
  obj.forEach(obj => {
    const anchor = document.createElement('a')
    anchor.setAttribute('href', obj.href)
    anchor.textContent = obj.text
    anchor.style.color = 'var(--color-dark)'
    subMenuEl.appendChild(anchor)
  })
}

subMenuEl.addEventListener('click', e => {
  e.preventDefault()
  if (e.target.tagName !== 'A') return
  showingSubMenu = false
  subMenuEl.style.top = '0'
  topMenuLinks.forEach(item => item.classList.remove('active'))
  mainH1.textContent = e.target.textContent
})
