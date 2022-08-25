const list = document.querySelector('ul')
const input = document.querySelector('input')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
  const inputValue = input.value
  const item = document.createElement('li')
  const button = document.createElement('button')
  button.textContent = 'delete'
  button.classList.add('btn-delete')
  item.textContent = inputValue
  item.append(button)
  list.appendChild(item)
  input.value = ''

  button.addEventListener('click', () => item.remove())
  input.focus()
})

const handleColorChange = e => {
  if (e.target.tagName === 'LI') {
    e.target.style.color = 'var(--color-primary)'
  }
}

list.addEventListener('click', handleColorChange)

// list.removeEventListener('click', handleColorChange)
