// Natural numbers a, b, c are given, which are the lengths of the sides of the triangle. Output True if the triangle with sides a, b, c:
// a) is equilateral,
// b) is equal. Otherwise, emit False.

let a = 8;
let b = 12;
let c = 8;

let trueValue = true;
if ((a === b) === c) {
   console.log(trueValue);
} else if (a === b || a === c || b === c) {
   console.log(trueValue);
} else console.log(!trueValue);
