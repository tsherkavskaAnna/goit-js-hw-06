// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, 
// что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, 
//где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа 
//к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.


const form = document.querySelector(`.login-form`);
console.log(form);

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

const formElements = event.currentTarget.elements;
console.log(formElements);
 
const email = formElements.email.value;
const password = formElements.password.value;
console.log(email, password);

if (email === "" || password === "") {
    return alert("Please fill in all the fields!")
 }
console.log(`E-mail: ${email.value}, Password: ${password.value}`);
event.currentTarget.reset();
 }
    
