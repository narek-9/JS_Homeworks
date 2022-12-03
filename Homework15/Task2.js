// Declare a function that takes an argument as a parameter
// array, perform received array validation and return
// the value of the second largest of the array elements.

const getSecondMax = (arr) => {
   if (!validateArr(arr)) {
      return "Your value is not an array";
   }
   const maxValue = Math.max(...arr);
   arr = arr.filter((currentValue) => currentValue !== maxValue);
   return Math.max(...arr);
};

const validateArr = (arr) => Array.isArray(arr);
console.log(getSecondMax([1, 2, 3, 4, 4]));
