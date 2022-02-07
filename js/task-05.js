const refs = {
    input:  document.querySelector(`#name-input`),
    output: document.querySelector(`#name-output`),
}
console.log(refs);


refs.input.addEventListener(`input`, onInputChange )
    console.log(`Click`)

function onInputChange(event)  {
    if (event.currentTarget.value === "") {
       refs.output.textContent = "Anonymous";
    } else {
        refs.output.textContent = event.currentTarget.value;
    }
}  

