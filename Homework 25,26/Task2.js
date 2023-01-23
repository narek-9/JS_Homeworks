const arrayCounter = (arr) =>
   arr.reduce((sum, el) => (Array.isArray(el) ? sum + 1 : sum), 0);
console.log(arrayCounter([[], [1], [2], [3, 4], [5]]));
