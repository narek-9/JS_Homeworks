// Write a function that takes an array n as an argument, which contains natural numbers, and returns:
// 1. The same array in which the numbers are arranged in ascending order.
// A. sort() method,
// B. using your own declared function.

let initialArr = getArray();
console.log(`Initial array = [${initialArr}]`);

function getArray() {
   let size = +prompt("Enter array size"),
      arr = [];

   for (let i = 0; arr.length < size; i++) {
      let value = +prompt(`Enter ${i + 1} value`);
      arr[i] = value;
   }
   return arr;
}

// My function
function sortArray(arr) {
   for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
         if (arr[j] > arr[j + 1]) {
            let value = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = value;
         }
      }
   }
   return arr;
}
console.log(`Sorted array = [${sortArray(initialArr)}]`);

// sort() method
function sortMethod(arr) {
   arr.sort((a, b) => a - b);
   return arr;
}
console.log(`Sorted array = [${sortMethod(initialArr)}]`);
