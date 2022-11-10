// Write a function that takes an array n as an argument, which contains natural numbers, and returns:
// 2. The same array in which the numbers are located: first even numbers, then odd numbers.

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

function sortByParity() {
   for (let i = 0; i < initialArr.length - 1; i++) {
      for (let j = 0; j < initialArr.length - 1; j++) {
         if (initialArr[j] % 2 && initialArr[j + 1] % 2 === 0) {
            let value = initialArr[j];
            initialArr[j] = initialArr[j + 1];
            initialArr[j + 1] = value;
         }
      }
   }
   return initialArr;
}
console.log(`Sorted array = [${sortByParity(initialArr)}]`);
