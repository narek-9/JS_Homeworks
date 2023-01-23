const arrayCounter = (arr) => {
   let count = 0;
   arr.forEach((el) => (Array.isArray(el) ? count++ : null));
   return count;
};
console.log(arrayCounter([[], [1], [2], [3, 4], [5]]));
