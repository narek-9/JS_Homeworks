let number = 5040;
let initialValue = number;
let divider = 1;
while (number !== 1) {
   if (Number.isInteger(number)) {
      number /= divider;
      divider++;
   } else {
      console.log(`${initialValue} is not factorial`);
      break;
   }
   if (number === 1) {
      console.log(`${initialValue} is factorial of ${divider - 1}`);
   }
}
