const range = document.querySelector(`#font-size-control`);
const textToChange = document.querySelector(`#text`);

console.log(range);
console.log(textToChange);

range.addEventListener(`input`, onInputToChangeText)
  console.log(``)

    
function onInputToChangeText(event) {
    console.log(event.target)
  textToChange.style.fontSize = event.currentTarget.value + 'px';
}