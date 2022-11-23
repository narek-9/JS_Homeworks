// Given real numbers a, b, c. If the given numbers form a geometric progression, return True. Otherwise, emit False.

const a = 5;
const b = 10;
const c = 20;

let trueValue = true;

if (b / a === c / b) {
   console.log(trueValue);
} else console.log(!trueValue);
