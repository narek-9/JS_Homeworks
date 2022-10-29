
// Calculate and express the value of the 
// Smallest digit of a three-digit number.

let number = 593;

let array = ("" + number).split("").map(Number);

console.log(Math.min(array[0], array[1], array[2]));
