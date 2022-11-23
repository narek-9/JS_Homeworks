// Natural numbers a and b are given. Return True if:
// a) they are both odd,
// b) at least one of them is odd,
// c) exactly one of them is odd,
// d) they are both odd or both even.
// Otherwise, emit False.

let a = 11;
let b = 20;

if (a % 2 !== 0 && b % 2 !== 0) {
   console.log("True");
} else if (a % 2 !== 0 || b % 2 !== 0) {
   console.log("True");
} else if ((a % 2 !== 0 && b % 2 === 0) || (b % 2 !== 0 && a % 2 === 0)) {
   console.log("True");
} else if ((a % 2 !== 0 && b % 2 !== 0) || (a % 2 === 0 && b % 2 === 0)) {
   console.log("True");
} else {
   console.log("False");
}
