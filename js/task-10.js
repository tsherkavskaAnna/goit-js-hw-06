const input = document.querySelector('input')
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')
const box = document.getElementById('boxes')


btnCreate.addEventListener('click', onCreateBtn);
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(number) {
  const numberOfBoxes = parseInt(input.value);
  let size = 30;

  for(let i = 0; i < numberOfBoxes; i++) {
    const element = document.createElement('div');
    size += 10;
    element.style.backgroundColor = getRandomHexColor();
    element.classList.add('boxEl');
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    box.appendChild(element);
  }
}

function onCreateBtn() {
  createBoxes()
}

function destroyBoxes() {
  box.innerHTML = ""
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



