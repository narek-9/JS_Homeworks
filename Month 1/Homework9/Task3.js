// Write a function that takes an array n as an argument, which contains natural numbers, and returns:
// A new array containing only those numbers that had only even-digit neighbors in the given n array.

function getArray() {
   let size = +prompt("Enter array size"),
      arr = [];

   for (let i = 0; arr.length < size; i++) {
      let value = +prompt(`Enter ${i + 1} value`);
      arr[i] = value;
   }
   return arr;
}

function sortArray(arr) {
   let finalArray = [];
   for (let i = 0; i < arr.length; i++) {
      if (i === 0 && arr[i + 1] % 2 === 0) {
         finalArray.push(arr[i]);
      } else if (i === arr.length - 1 && arr[i - 1] ^ (2 === 0)) {
         finalArray.push(arr[i]);
      } else if (arr[i - 1] % 2 === 0 && arr[i + 1] % 2 === 0) {
         finalArray.push(arr[i]);
      }
   }
   return finalArray;
}

console.log(sortArray(getArray()));
