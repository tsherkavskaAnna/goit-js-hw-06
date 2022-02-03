
const list = document.querySelectorAll(`#categories li.item`);
console.log(`Number of categories: ${list.length}`);

list.forEach(list => {
    console.log(`Category: ${list.firstElementChild.textContent}`);
    console.log(`Elements: ${list.querySelectorAll(`li`).length}`);
})

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


