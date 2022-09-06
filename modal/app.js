// DOM elements
const btn1 = document.querySelector('.btn-1')
const closeBtn = document.querySelector('.close-btn')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCancel = document.querySelector('.btn-cancel')

// open modal
const openModal = () => {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

// close modal
const closeModal = () => {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

// event listeners
// listen for btn 1 click to open modal
btn1.addEventListener('click', openModal)

// listen for click on close btn to close modal
closeBtn.addEventListener('click', closeModal)

// listen for click on overlay to close modal
overlay.addEventListener(
  'click',
  e => e.target.classList.contains('overlay') && closeModal()
)

btnCancel.addEventListener('click', closeModal)

// listen for esc key press to close modal
document.body.addEventListener(
  'keydown',
  e => e.key === 'Escape' && closeModal()
)
