// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
    array.splice(array.indexOf(item), 1); //Це якщо треба видалити конкретний елемент, наприклад елемент п'ять.
    // array.splice(item - 1, 1); // Це якщо нам потрібно видалити, наприклад, п'ятий елемент за списком. 
}

removeElement(array, 5);
console.log(array);