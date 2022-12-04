// Declare a firstOddNumber function that takes arr as an argument
// array, i index and recursively return an array
// the first centimeter value encountered. Absence of odd value
// in this case it will return the following text: "There are no odd
// numbers in this array".

const firstOddNumber = (arr, i) => {
   if (Array.isArray(arr)) {
      if (arr.length) {
         if (i === arr.length - 1) {
            return !(arr[i] % 2)
               ? "There are no odd numbers in this array"
               : arr[i];
         } else if (arr[i] % 2) {
            return arr[i];
         }
         return firstOddNumber(arr, i + 1);
      }
      return "There are no values in this array";
   }
   return `${arr} is not an array`;
};
console.log(firstOddNumber([2, 14, 6, 4, 9, 10, 1, 5, 8], 0));
