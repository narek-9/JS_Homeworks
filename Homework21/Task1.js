// Declare a randomMaker decorator function that as a parameter
// takes a positive value of max, returns a new function which in turn
// returns any random number between 0 and max.

const randomMaker = (max) => () => Math.trunc(Math.random() * max);
const random = randomMaker(10);
console.log(random());
