const container = document.querySelector('.container')
const itemsLarge = document.querySelectorAll('.item-large')
const text = document.querySelector('h1')

const makeMagic = e => {
  if (e.target.classList[0] === 'item-small') {
    if (e.target.classList.value.includes('active')) {
      e.target.classList.remove('active')
      itemsLarge.forEach(item => {
        item.style.backgroundColor = 'var(--color-primary)'
      })
      text.style.color = 'var(--color-light)'
    } else {
      e.target.classList.add('active')
      itemsLarge.forEach(item => {
        item.style.backgroundColor = 'var(--color-dark)'
      })
      text.style.color = 'var(--color-dark)'
    }
  }
}

container.addEventListener('click', makeMagic)

// const makeMagic = e => {
//   if (e.target.classList[0] === 'item-small') {
//     itemsLarge.forEach(item => {
//       item.style.backgroundColor = 'var(--color-light)'
//       item.classList.add('active')
//       console.log(item)
//     })
//     text.style.color = 'var(--color-dark)'
//   }
// }
