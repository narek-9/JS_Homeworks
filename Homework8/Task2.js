// Write a function that takes a natural number n as an argument and returns:
// b) the arithmetic mean of the even numbers found in it.

// b
let n = +prompt("Enter natural number"),
   array = [];
while (isNaN(n)) {
   n = +prompt("Enter natural number again");
}

while (n !== 0) {
   let lastDigit = n % 10;
   n = (n - lastDigit) / 10;
   array.unshift(lastDigit);
}

function getMean(array) {
   let result = 0;
   let count = 0;
   for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0 && array[i] !== 0) {
         result += array[i];
         count++;
      }
   }
   if (count === 0) return "There are no even digits";
   else {
      result /= count;
      return result;
   }
}

console.log(getMean(array));