// Natural numbers a, b and c are given. Express True if a triangle with sides a, b, c exists, False otherwise.

let a = 13;
let b = 28;
let c = 24;

let trueValue = true;
if (a + b > c && a + c > b && b + c > a) {
   console.log(trueValue);
} else console.log(!trueValue);
