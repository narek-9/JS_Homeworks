// Write a function that takes a natural number n as an argument and returns:
// c) true if the numbers in it are not in descending order, and returns false - otherwise.

// c
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

function checkOrder(array) {
   for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]) {
         return true;
      } else if (i === array.length - 2 && array[i] >= array[i + 1]) {
         return false;
      }
   }
}

console.log(checkOrder(array));
