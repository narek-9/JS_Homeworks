// Write a function that takes a natural number n as an argument and returns:
// d) true if it contains duplicate digits, and returns false otherwise.

function checkDuplicate() {
   let n = +prompt("Enter natural number again"),
      array = [];
   while (isNaN(n)) {
      n = +prompt("Enter natural number again");
   }

   while (n !== 0) {
      let lastDigit = n % 10;
      n = (n - lastDigit) / 10;
      array.unshift(lastDigit);
   }

   while (array.length !== 1) {
      let a = array[0];
      array.shift();
      if (array.indexOf(a) !== -1) {
         return true;
      } else if (array.length === 1 && array.indexOf(a) === -1) {
         return false;
      }
   }
}

console.log(checkDuplicate());
