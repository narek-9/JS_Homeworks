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
function sumRec(array, sum, i) {
   if (i === array.length) {
      return sum;
   } else {
      sum += array[i];
      return sumRec(array, sum, i + 1);
   }
}
console.log("sum = " + sumRec(createArray(), 0, 0));
