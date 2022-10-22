// Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).

"use strict";

// let n = 3;
// let n = 17;
let n = 100;
n = String(n);

let nn = n + n;
let nnn = nn + n;

n = Number(n);
nn = Number(nn);
nnn = Number(nnn);

let result = n + nn + nnn;
console.log(result);
