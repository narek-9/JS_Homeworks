// Declare a function that takes an argument as a parameter
// array, perform received array validation and return
// the value of the second largest of the array elements.

const getSecondMax = (value) => {
   if (Array.isArray(value)) {
      const firstMax = Math.max(...value);
      value.splice(value.indexOf(firstMax), 1);
      const secondMax = Math.max(...value);
      return secondMax;
   }
   return "Enter valid value";
};
console.log(getSecondMax([5, 23, 45, 6, 78]));
