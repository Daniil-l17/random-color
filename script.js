const btn = document.querySelector('button')
const colorBG = document.querySelector('.colorRgb')
const h1 = document.querySelector('h1')
const copyBtn = document.querySelector('.copyBtn')
const randomStringArray = ['e', 'c', 'b', 'a', 'f', 'd', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

btn.onclick = () => {
  let resultStringColor = ''
  for (i = 0; i < 6; i++) {
    resultStringColor += randomStringArray[Math.floor(Math.random() * randomStringArray.length)]
  }
  colorBG.style.background = `#${resultStringColor}`
  h1.innerText = `#${resultStringColor}`
}

copyBtn.onclick = () => {
  navigator.clipboard.writeText(h1.innerText)
}

btn.click()