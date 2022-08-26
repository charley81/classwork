// // const link = document.querySelector('a')

// // link.textContent = 'Mozilla Developer Network'
// // link.href = 'https://developer.mozilla.org'

// // const sect = document.querySelector('section')

// // const para = document.createElement('p')
// // para.textContent = 'We hope you enjoyed the ride'
// // sect.appendChild(para)

// // const text = document.createTextNode(
// //   ' — the premier source for web development knowledge.'
// // )

// // const linkPara = document.querySelector('p')
// // linkPara.appendChild(text)

// // sect.appendChild(linkPara)
// // // sect.removeChild(linkPara)
// // linkPara.remove()

// // console.log(document.styleSheets)

// // para.style.color = 'white'
// // para.style.background = 'black'
// // para.style.padding = '10px'
// // para.style.width = '250px'
// // para.style.textAlign = 'center'

// // para.setAttribute('class', 'highlight')

// const input = document.querySelector('input')
// const list = document.querySelector('ul')
// const button = document.querySelector('button')

// button.addEventListener('click', () => {
//   let inputValue = input.value
//   input.value = ''
//   const listItem = document.createElement('li')
//   const itemSpan = document.createElement('span')
//   const itemButton = document.createElement('button')
//   itemSpan.textContent = inputValue
//   itemButton.textContent = 'Delete'
//   listItem.append(itemSpan)
//   listItem.append(itemButton)
//   list.appendChild(listItem)

//   itemButton.addEventListener('click', () => {
//     listItem.remove()
//   })

//   input.focus()
// })
