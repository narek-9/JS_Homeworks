// Write a function that returns the sum of the elements of an array recursively.

function createArray() {
   let arrayLength = Math.round(Math.random() * 6);
   let array = [];
   while (array.length < arrayLength) {
      array.push(Math.round(Math.random() * 25));
   }
   console.log("array" + " = " + "[" + array + "]");
   return array;
}
function sum(array, result, i) {
   if (i === array.length) {
      return result;
   } else {
      result += array[i];
      return sum(array, result, i + 1);
   }
}
console.log("sum = " + sum(createArray(), 0, 0));
