// Replace the first and last digits of the given number with places.

// Array method
// let number = 50912;
// let array = ("" + number).split("").map(Number);

// let value = array[0];
// array[0] = array[array.length - 1];
// array[array.length - 1] = value;

// console.log(array);


// Math method

let number = +prompt("Enter integer number");
while (isNaN(number) || !Number.isInteger(number)) {
   number = +prompt("Enter again");
}

function firstLastDigitChange(number) {
   if (number > -10 && number < 10) {
      return number;
   }
   let positive = true;
   if (number < 0) {
      number *= -1;
      positive = false;
   }

   let firstDigit = number;
   let divider = 1;
   while (firstDigit >= 10) {
      firstDigit = (firstDigit - (firstDigit % 10)) / 10;
      divider *= 10;
   }
   let lastDigit = number % 10;

   let result = number;
   result = (number - lastDigit) / 10;
   result = result - (divider / 10) * Math.trunc(number / divider);
   result = result * 10 + firstDigit;
   result = result + lastDigit * divider;

   if (positive) return result;
   else return -result;
}

console.log(firstLastDigitChange(number));
