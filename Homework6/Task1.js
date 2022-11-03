// Given a natural number n, find the nth term of the Fibonacci sequence.

let n = +prompt("Enter the number n");
let array = [0, 1];
for (let i = 2; i < n; i++) {
   array[i] = array[i - 1] + array[i - 2];
}
console.log(`Fibonacci(n) = ${array[array.length - 1]}`);
