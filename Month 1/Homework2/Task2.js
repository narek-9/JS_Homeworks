// Natural numbers a,b and c are given. Output True if of these:
// a) at least one is zero,
// b) exactly one is five,
// c) none is equal to the others,
// d) exactly two are equal,
// e) all three are equal to each other,
// f) at least one is negative.
// Otherwise, emit False.

let a = 5;
let b = 54;
let c = 0;

if (a === 0 || b === 0 || c === 0) {
   console.log("True");
} else if (
   (a === 5 && b !== 5 && c !== 5) ||
   (b === 5 && a !== 5 && c !== 5) ||
   (c === 5 && b !== 5 && a !== 5)
) {
   console.log("True");
} else if (a !== b && a !== c && b !== c) {
   console.log("True");
} else if (
   (a === b && a !== c) ||
   (b === c && b !== a) ||
   (c === a && c !== b)
) {
   console.log("True");
} else if (a === b && a === c) {
   console.log("True");
} else if (a < 0 || b < 0 || c < 0) {
   console.log("True");
} else {
   console.log("False");
}
