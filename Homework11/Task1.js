// Create a function that takes an array and.
// Will validate the array passed to it
// Returns true if the array contains the sum of the largest and smallest values ​​in the given array.

const checkIsValueInArray = (value) => {
   if (Array.isArray(value)) {
      let array = value;
      if (array.length !== 0) {
         let count = 0;
         for (let i = 0; i < array.length; i++) {
            if (typeof array[i] !== "number") {
               array.splice(i, 1);
               i--;
            } else count++;
         }
         if (count >= 2) {
            let smallerValue = array[0];
            for (const item of array) {
               smallerValue = item < smallerValue ? item : smallerValue;
            }
            let greatestValue = array[0];
            for (const item of array) {
               greatestValue = item > greatestValue ? item : greatestValue;
            }
            return array.indexOf(greatestValue + smallerValue) !== -1;
         }
         return "There are no at least 2 numbers in array";
      }
      return "Array is Empty";
   }
   return `${value} is not an array`;
};

const createArray = () => {
   const arraySize = +prompt("Enter array size");
   let array = [];
   for (let i = 0; array.length < arraySize; i++) {
      let arrValue = +prompt(`Enter the ${i + 1} value of array`);
      array.push(arrValue);
   }
   return array;
};

console.log(checkIsValueInArray(createArray()));
