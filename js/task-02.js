const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const listOfItems = document.querySelector(`ul#ingredients`);
console.log(listOfItems);


const makeList = ingredients.map(ingredient => {
  const makeItem = document.createElement(`li`);
  makeItem.textContent = ingredient;
  return makeItem;
});

console.log(ingredients);

listOfItems.append(...makeList);



