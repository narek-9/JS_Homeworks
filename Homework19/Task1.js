// Declare a wordsCount function that will count and return itself as
// the number of words contained in the string passed to the parameter.

const wordsCount = (str) => {
   const count = str.match(/\w+/gim) || [];
   return count;
};

console.log(wordsCount("My name is John. I’m from USA"));
