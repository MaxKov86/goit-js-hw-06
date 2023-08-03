function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const boxesList = document.querySelector('#boxes');
const btnCreateBox = document.querySelector('button[data-create]');
const btnDestroyBox = document.querySelector('button[data-destroy]');

let counter = '';

inputEl.addEventListener('input', e => {
  counter = Number(e.currentTarget.value);
});

btnCreateBox.addEventListener('click', e => {
  createBoxes(counter);
});

btnDestroyBox.addEventListener('click', e => {
  boxesList.innerHTML = '';
  inputEl.value = '';
  counter = '';
});

function createBoxes(amount) {
  const arrayBoxes = [];

  for (let i = 0, width = 30, height = 30; i < amount; i += 1, width += 10, height += 10) {
    const box = document.createElement('div');
    box.style.marginTop = '15px';
    box.style.width = width + 'px';
    box.style.height = height + 'px';
    box.style.border = 'solid';
    box.style.borderColor = getRandomHexColor();
    box.style.backgroundColor = getRandomHexColor();
    arrayBoxes.push(box);
  }

  boxesList.append(...arrayBoxes);
  console.log(boxesList);
}
