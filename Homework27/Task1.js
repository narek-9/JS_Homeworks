const sliceSymb = (str, symb) => {
   const arr = [];
   for (let value of str) {
      if (value.toLowerCase() !== symb.toLowerCase()) {
         arr.push(value);
      }
   }
   return arr.join("");
};
console.log(sliceSymb("Ann is playing piano. Absolutely fantastic.", "a"));
