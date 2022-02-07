

let counterValue = 0;

const decrementButton = document.querySelector(`button[data-action="decrement"]`);
console.log(decrementButton);
const incrementButton = document.querySelector(`button[data-action="increment"]`);
console.log(incrementButton);
const value = document.querySelector(`#value`);


const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
}

incrementButton.addEventListener(`click`, increment);
console.log(`Diminuire cifra`);
decrementButton.addEventListener(`click`, decrement);
console.log(`Aumentare cifra`);

