// Calculate and express the value of the largest digit of a three-digit number.

let number = 913;

let array = ("" + number).split("").map(Number);

console.log(Math.max(array[0], array[1], array[2]));
