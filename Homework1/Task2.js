// Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).

let number = Math.floor(Math.random() * (15 - 1) ) + 1;
console.log("n = " + number);
console.log(`${number}${number * 2}${number * 3}`);
