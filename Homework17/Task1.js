// Declare a sumOfEllements function that takes as a parameter
// arr is an array containing the elements
// masses. Make arr array
// validation. Get and return a new array consisting of the data
// elements of the arrays contained in the array from the sum.
const sumOfEllements = (arr) => {
   if (arrValidate(arr)) {
      for (let i = 0; i < arr.length; i++) {
         arr[i] = arr[i].reduce((sum, el) => sum + el);
      }
      return arr;
   }
   return "Array must contain only non-empty arrays!";
};

const arrValidate = (arr) => {
   return arr.every((value) => Array.isArray(value) && value.length);
};

console.log(
   sumOfEllements([
      [5, 6, 7],
      [0, 1],
      [15, 25, 5],
   ])
);
