// Real numbers a, b, c are given. If they are arranged in ascending order, double their values ​​and reproduce the obtained numbers.Otherwise, emit False.

let a = 5,
   b = 23,
   c = 34;

if (a < b && b < c) {
   a *= 2;
   b *= 2;
   c *= 2;
   console.log(a, b, c);
} else console.log(false);
