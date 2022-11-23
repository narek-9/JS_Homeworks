// Write a function that returns the greatest common divisor of two positive numbers.
// A. iteratively
// B. recursively

// A
// let n = +prompt("Enter first positive number");
// let m = +prompt("Enter second positive number");

// function greatestCommonDivisor(n, m) {
//    while (n !== m) {
//       if (n > m) {
//          n = n - m;
//       } else {
//          m = m - n;
//       }
//    }
//    return n;
// }
// console.log(
//    `The greatest common divisor of ${n} and ${m} = ` +
//       greatestCommonDivisor(n, m)
// );

// B
let n = +prompt("Enter first positive number");
let m = +prompt("Enter second positive number");

function greatestCommonDivisor(n, m) {
   if (n === m) {
      return n;
   } else if (n > m) {
      return greatestCommonDivisor(n - m, m);
   } else return greatestCommonDivisor(n, m - n);
}
console.log(
   `The greatest common divisor of ${n} and ${m} = ` +
      greatestCommonDivisor(n, m)
);
