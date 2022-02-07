
const btnToChange = document.querySelector(`.change-color`);
console.log(btnToChange);
const nameOfColor = document.querySelector(`.color`);
console.log(nameOfColor);

btnToChange.addEventListener(`click`, targetButtonClickHandler);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function targetButtonClickHandler() {
  const bgColor = getRandomHexColor();
  nameOfColor.textContent = bgColor;
  document.body.style.backgroundColor = bgColor;
}



