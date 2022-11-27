// Create a counter function that will increment by 1 each time it is called
// value.

const counter = () => {
   let a = 0;
   return function () {
      return a++;
   };
};
const b = counter();
console.log(b());
console.log(b());
console.log(b());
