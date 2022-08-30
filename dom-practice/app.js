// global
const mainEl = document.querySelector('main')
const nav = document.querySelector('#top-menu')
const subMenuEl = document.querySelector('#sub-menu')
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

// createing a h1, adding some text & adding styling to main & main nav
mainEl.style.backgroundColor = 'var(--color-dark)'
const mainH1 = document.createElement('h1')
mainH1.textContent = 'SEI Rocks!'
mainEl.append(mainH1)
mainEl.classList.add('flex-ctr')
nav.style.height = '100%'
nav.style.backgroundColor = 'var(--color-grey-dark)'
nav.classList.add('flex-around')

// looping over menulinks array and creating an a tag for each object
menuLinks.forEach(item => {
  const anchor = document.createElement('a')
  anchor.setAttribute('href', item.href)
  anchor.textContent = item.text
  nav.appendChild(anchor)
})

// adding styling to sub menu
subMenuEl.style.height = '100%'
subMenuEl.style.backgroundColor = 'var(--color-grey-light)'
subMenuEl.classList.add('flex-around')
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0'

// cant put this var at top due to the a links not being created yet
const topMenuLinks = nav.querySelectorAll('a')
// event listener on main nav element, listens for a click on an a tag... this uses event delegation => listener on nav but only runs if the e.target is an a tag
nav.addEventListener('click', e => {
  e.preventDefault()
  // if e.target is not an a tag then return out of function and do nothing
  if (e.target.tagName !== 'A') return
  // if the e.target has a class of active, meaning it should be open, then remove the class and close the menu
  if (e.target.classList.contains('active')) {
    e.target.classList.remove('active')
    showingSubMenu = false
    subMenuEl.style.top = '0'
    return
  }

  // remove active class from all nav links
  topMenuLinks.forEach(item => item.classList.remove('active'))
  // add the active class to the clicked nav link
  e.target.classList.add('active')
  // global var to hold selected obj from menulinks
  let linkObj
  //
  // loop ove rthe menulinks array. if the text in the obj is equal to the text of e.target, then set the linkObj var to that object. If that object has a sublinks property, then set showSubMenu to true, else set it to false
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
  // if showSubMenu = true, then run buildSubMenu func and pass in the selected object, but if showSubMenu is false, then just set the submenu top style to 0
  showingSubMenu ? buildSubMenu(linkObj.subLinks) : (subMenuEl.style.top = '0')
})

// buildSubMenu function takes in the selected links object. sets some styles to the submenu to make it visisble and loops over the submenu and creates a links for each link
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

// when clicking in the submenu. check if the clicked element was a link and if not return out the function and do nothing, but if it is a link close the menu. Also remove active class from all main menu links and set the text of the main H1 to the text content of the selcted link
subMenuEl.addEventListener('click', e => {
  e.preventDefault()
  if (e.target.tagName !== 'A') return
  showingSubMenu = false
  subMenuEl.style.top = '0'
  topMenuLinks.forEach(item => item.classList.remove('active'))
  mainH1.textContent = e.target.textContent
})
