const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listOfItems = document.querySelector(`ul#ingredients`);
console.log(listOfItems);


const makeList = ingredients.map(ingredient => {
  const makeItem = document.createElement(`li`);
  makeItem.textContent = ingredient;
  return makeItem;
});

console.log(ingredients);

listOfItems.append(...makeList);



