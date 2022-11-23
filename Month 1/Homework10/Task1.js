// Write a recursive function that takes and m numbers and returns an array filled with all numbers in the range (n, m).

let n = +prompt("Enter number n");
let m = +prompt("Enter number m");

function getArray(n, m, array) {
   if (m > n) {
      array.push(n);
      return getArray(n + 1, m, array);
   } else if (n > m) {
      array.push(n);
      return getArray(n - 1, m, array);
   } else {
      array.shift();
      return array;
   }
}

console.log(getArray(n, m, []));
