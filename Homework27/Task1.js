const sliceSymb = (str, symb) => {
   let newStr = "";
   for (let value of str) {
      if (value.toLowerCase() !== symb.toLowerCase()) {
         newStr += value;
      }
   }
   return newStr;
};
console.log(sliceSymb("Ann is playing piano. Absolutely fantastic.", "a"));
