// Declare a uniqueArray function that takes as a parameter
// array and returns a new array with unique values.
// Solve the problem using Set type collection.

const uniqueArray = (arr) => [...new Set(arr)];
console.log(uniqueArray([1, 3, 5, 1, 3, 1, 5]));
