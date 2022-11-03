// Given a natural number n, find the sum of the 1st to the nth terms of the Fibonacci sequence.

let n = +prompt("Enter the number n");
let array = [0, 1];
let sum = 1;
for (let i = 2; i < n; i++) {
   array[i] = array[i - 1] + array[i - 2];
   sum += array[i];
}
console.log("Sum = " + sum);
