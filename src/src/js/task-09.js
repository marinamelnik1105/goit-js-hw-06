function getRandomHexColor() {
  return  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');

btn.addEventListener('click', onBodyColor)

function onBodyColor() {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor()
}

