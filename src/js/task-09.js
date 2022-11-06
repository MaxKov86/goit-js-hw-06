function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector(`body`);
const btnChangeColor = document.querySelector(`.change-color`);
const spanValue = document.querySelector(`.color`);

function onBodyColorChange() {
  body.style.backgroundColor = getRandomHexColor();
  spanValue.textContent = getRandomHexColor();
};

btnChangeColor.addEventListener(`click`, onBodyColorChange)