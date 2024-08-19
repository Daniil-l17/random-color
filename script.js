const btn = document.querySelector('button')
const colorBG = document.querySelector('.colorRgb')
const h1 = document.querySelector('h1')
const copyBtn = document.querySelector('.copyBtn')

btn.onclick = () => {
  let result = ''
  for (i = 0; i < 6; i++) {
    const m = ['e', 'c', 'b', 'a', 'f', 'd', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    result += m[Math.floor(Math.random() * m.length)]
  }
  colorBG.style.background = `#${result}`
  h1.innerText = `#${result}`
}

copyBtn.onclick = () => {
  navigator.clipboard.writeText(h1.innerText)
}

btn.click()