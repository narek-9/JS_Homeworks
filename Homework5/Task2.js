// Replace the first and last digits of the given number with places.

let number = 50912;
let array = ("" + number).split("").map(Number);

let value = array[0];
array[0] = array[array.length - 1];
array[array.length - 1] = value;

console.log(array);
