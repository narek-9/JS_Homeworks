// Declare a firstOddNumber function that takes arr as an argument
// array, i index and recursively return an array
// the first centimeter value encountered. Absence of odd value
// in this case it will return the following text: "There are no odd
// numbers in this array".

const firstOddNumber = (arr, i) => {
   return i === arr.length
      ? "There are no odd numbers in this array"
      : arr[i] % 2
      ? arr[i]
      : firstOddNumber(arr, i + 1);
};
console.log(firstOddNumber([4, 10, 6, 8, 4, 6, 8], 0));
