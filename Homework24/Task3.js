const convertToNumber = (value) => {
   value = value.trim();
   if (value !== "" && +value) return value;
   throw new TypeError("Can't convert to number");
};

alert(convertToNumber(prompt("Enter the value", "H1")));
