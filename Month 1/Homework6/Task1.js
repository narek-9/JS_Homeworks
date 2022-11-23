// Given a natural number n, find the nth term of the Fibonacci sequence.

let n = +prompt("Enter the number n");
let array = [0, 1];
let i = 2;
while (i < n) {
   array[i] = array[i - 1] + array[i - 2];
   i++;
}
console.log(`Fibonacci(${n}) = ${array[array.length - 1]}`);
