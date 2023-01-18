const convertToNumber = (value) => {
   if (isNaN(+value)) {
      throw new TypeError("Can't convert to number");
   }
   return value;
};

alert(convertToNumber(prompt("Enter the value", "H1")));
