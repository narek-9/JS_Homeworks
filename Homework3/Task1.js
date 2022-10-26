// Given a positive integer a. Return True if it:
// a) is a two-digit and even number,
// b) is a three-digit and odd number.
// Otherwise, emit True.

let a = 17;
let trueValue = true;
if (a > 9 && a < 100 && a % 2 === 0) {
   console.log(trueValue);
} else if (a > 99 && a < 1000 && a % 2 !== 0) {
   console.log(trueValue);
} else console.log(!trueValue);
