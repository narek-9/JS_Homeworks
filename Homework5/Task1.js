// Multiply the given natural number by:
// a) sum, quantity, product of digits,
// b) the smallest of the odd digits,
// c) the sum of odd digits greater than 4,
// d) the product of even digits less than 7,
// e) the square of the difference between the largest and smallest digits.

let number = 546;
let array = ("" + number).split("").map(Number);

// a)
let digitsSum = 0;
let digitsMultiply = 1;
for (let i = 0; i < array.length; i++) {
   digitsSum += array[i];
   digitsMultiply *= array[i];
}
console.log("Sum of all digits = " + digitsSum);
console.log("Number of digits = " + array.length);
console.log("Multiplication of all digits = " + digitsMultiply);
console.log();

// b
let oddDigitsArray = [];
for (let i = 0; i < array.length; i++) {
   if (array[i] % 2 !== 0) {
      oddDigitsArray.push(array[i]);
   }
}

let minOddDigit = oddDigitsArray[0];
if (oddDigitsArray.length > 0) {
   for (let i = 1; i < oddDigitsArray.length; i++) {
      if (oddDigitsArray[i] < minOddDigit) {
         minOddDigit = oddDigitsArray[i];
      }
   }
   console.log("Minimal odd digit = " + minOddDigit);
} else console.log("There are no odd digits.");
console.log();

// c)
let unevenDigitsArray = [];
for (let i = 0; i < array.length; i++) {
   if (array[i] % 2 !== 0 && array[i] > 4) {
      unevenDigitsArray.push(array[i]);
   }
}

let oddDigitsSum = 0;
if (unevenDigitsArray.length > 0) {
   for (let i = 0; i < unevenDigitsArray.length; i++) {
      oddDigitsSum += unevenDigitsArray[i];
   }
   console.log("Odd digits sum = " + oddDigitsSum);
} else console.log("There are no uneven digits more than 4");
console.log();

// d)
let evenDigitsArray = [];
for (let i = 0; i < array.length; i++) {
   if (array[i] % 2 === 0 && array[i] < 7) {
      evenDigitsArray.push(array[i]);
   }
}

let evenDigitsMultiply = 1;
if (evenDigitsArray.length > 0) {
   for (let i = 0; i < evenDigitsArray.length; i++) {
      evenDigitsMultiply *= evenDigitsArray[i];
   }
   console.log("Multiplication of even digits = " + evenDigitsMultiply);
} else console.log("There are no even digits less than 7");
console.log();

// e)
let maxValue = array[0];
let minValue = array[0];

let maxMinMultiply = 1;
for (let i = 1; i < array.length; i++) {
   if (array[i] > maxValue) {
      maxValue = array[i];
   }
   if (array[i] < minValue) {
      minValue = array[i];
   }
   maxMinMultiply = (maxValue - minValue) ** 2;
}
console.log(
   "Square of maximal and minimal value differnce = " + maxMinMultiply
);
