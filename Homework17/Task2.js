// Declare a function isPrime that takes num as a parameter. Perform num value validation. A function of the browser's local memory
// (localStorage) stores true under the key corresponding to str value,
// if the number num is a prime number (divisible only by itself and 1),
// otherwise stores a false value.

const isPrime = (num, keyName) => {
   if (numValidate(num)) {
      if (num === 1) return alert("This number is neither prime or composite.");
      else if (num === 2) return localStorage.setItem(keyName, "true");
      else {
         for (let i = 2; i < num; i++) {
            if (num % i === 0) return localStorage.setItem(keyName, "false");
         }
         return localStorage.setItem(keyName, "true");
      }
   }
   return alert("Enter valid number");
};
const numValidate = (num) => Number(num) && Number.isInteger(num) && num > 0;

console.log(isPrime(+prompt("Enter number"), "isPrimeNumber"));
