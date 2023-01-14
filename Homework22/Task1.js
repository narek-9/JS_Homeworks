// Declare a delayActionMaker decorator function that takes as a parameter
// is the delay period in milliseconds. delayActionMaker decorator
// function returns a new function that takes action as a parameter
// function and calls it with a delay corresponding to delay
// (use SetTimeOut asynchronous function).

const sumAction = (a, b) => a + b;
const delayActionMaker = (delay) => {
   return (action) => setTimeout(() => action(), delay);
};
const delayAction = delayActionMaker(3000);
console.log(delayAction(() => sumAction(15, 20)));
