const sum = (number1) => (number2) =>
   validateNumbers(number1) && validateNumbers(number2)
      ? number1 + number2
      : "Invalid value";

const validateNumbers = (value) => typeof value === "number" && value !== NaN;
console.log(sum(12)(3));
