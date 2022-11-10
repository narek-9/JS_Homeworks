// Write a function that takes a natural number n as an argument and returns:
// e) index of the largest digit (if this digit occurs several times in the number, return the leftmost index).

function getMaxDigitIndex() {
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

   let maxNumber = array[0];
   for (let i = 1; i < array.length; i++) {
      if (array[i] > maxNumber) {
         maxNumber = array[i];
      }
   }
   return array.indexOf(maxNumber);
}
console.log("Index of the largest digit = " + getMaxDigitIndex());
