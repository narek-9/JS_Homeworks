// Given real numbers a, b, c. If the given numbers form an arithmetic progression, return True. Otherwise, emit False.

const a = 6;
const b = 8;
const c = 10;

let trueValue = true;
if (b - a === c - b) {
   console.log(trueValue);
} else console.log(!trueValue);

