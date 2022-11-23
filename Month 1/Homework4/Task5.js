// Express the digits of a three-digit number in descending order.

let number = 123;

let array = ("" + number).split("").map(Number);

let thirdVar;

if (array[1] > array[0]) {
   thirdVar = array[1];
   array[1] = array[0];
   array[0] = thirdVar;
}

if (array[2] > array[1]) {
   thirdVar = array[2];
   array[2] = array[1];
   array[1] = thirdVar;
}

if (array[1] > array[0]) {
   thirdVar = array[1];
   array[1] = array[0];
   array[0] = thirdVar;
}

console.log(array);
