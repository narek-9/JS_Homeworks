// A three-digit number a is given. Return True if:

// a) If there are equal digits among the digits of a three-digit number.
// b) If a three-digit number is equal to the square of the sum of its digits.
// c) If there is 5 digits in the last and first digits of a three-digit number.
// d) If the product of the digits of a three-digit number is greater than 200.

// Otherwise, emit False.

let number = 395;
let array = ("" + number).split("").map(Number);

if (array[0] === array[1] || array[0] === array[2] || array[1] === array[2]) {
   console.log(true);
} else if (number === (array[0] + array[1] + array[2]) ** 2) {
   console.logg(true);
} else if (array[0] === 5 && array[array.length - 1] === 5) {
   console.log(true);
} else if (array[0] * array[1] * array[2] > 200) {
   console.log(true);
}
