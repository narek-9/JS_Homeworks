// Given integers a,b and c. Return True if:
// a) all three are positive,
// b) at least one of them is positive,
// c) exactly one of them is positive,
// d) exactly two of them are positive,
// e) at least two of them are equal,
// Otherwise, emit False.

let a = -7;
let b = 84;
let c = 18;

if (a > 0 && b > 0 && c > 0) {
   console.log("True");
} else if (a > 0 || b > 0 || c > 0) {
   console.log("True");
} else if (
   (a > 0 && b < 0 && c < 0) ||
   (b > 0 && a < 0 && c < 0) ||
   (c > 0 && b < 0 && a < 0)
) {
   console.log("True");
} else if (
   (a > 0 && b > 0 && c < 0) ||
   (a > 0 && c > 0 && b < 0) ||
   (b > 0 && c > 0 && a < 0)
) {
   console.log("True");
} else if (a === b || a === c || b === c) {
   console.log("True");
} else console.log("False");
