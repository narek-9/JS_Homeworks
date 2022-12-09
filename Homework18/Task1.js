const sum = (number1) => {
   return (number2) => {
      return typeof number1 === "number" &&
         number1 !== NaN &&
         typeof number2 === "number" &&
         number2 !== NaN
         ? number1 + number2
         : "Invalid value";
   };
};
console.log(sum(12)(3));
