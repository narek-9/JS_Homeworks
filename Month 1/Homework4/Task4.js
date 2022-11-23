// Express the digits of a three-digit number in ascending order.

let number = 325;

let array = ("" + number).split("").map(Number);

let thirdVar;
if (array[1] < array[0]) {
   thirdVar = array[0];
   array[0] = array[1];
   array[1] = thirdVar;
}

if (array[2] < array[1]) {
   thirdVar = array[1];
   array[1] = array[2];
   array[2] = thirdVar;
}
if (array[1] < array[0]) {
   thirdVar = array[0];
   array[0] = array[1];
   array[1] = thirdVar;
}
console.log(array);

