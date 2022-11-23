// Input two numbers between 10 and 30, print all natural numbers between them, in reverse order.

let firstValue = +prompt("Enter first value");
let secondValue = +prompt("Enter second value");

while (firstValue < 10 || firstValue > 30) {
   alert("The first number does not match the conditions.");
   firstValue = +prompt("Enter again:");
}
while (secondValue < 10 || secondValue > 30) {
   alert("The second number does not match the conditions.");
   secondValue = +prompt("Enter again:");
}

let greaterValue = Math.max(firstValue, secondValue);
let lowerValue = Math.min(firstValue, secondValue);

for (; greaterValue >= lowerValue; greaterValue--) {
   console.log(greaterValue);
}
