// Natural numbers a, b, c are given, which are the lengths of the sides of the triangle. Output True if the triangle with sides a, b, c:
// a) is equilateral,
// b) is equal. Otherwise, emit False.

let a = 10;
let b = 8;
let c = 8;

let trueValue = true;
if (a === b && b === c) {
   console.log("Yes");
} else if (
   (a === b && a !== c) ||
   (a === c && a !== b) ||
   (b === c && b !== a)
) {
   console.log(trueValue);
} else console.log(!trueValue);