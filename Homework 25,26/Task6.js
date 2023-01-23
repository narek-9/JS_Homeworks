const sliceFuncMaker = (symb) => {
   return (str) => {
      symb = symb.toLowerCase();
      str = str.toLowerCase();
      while (str.indexOf(symb) !== -1) {
         str =
            str.slice(0, str.indexOf(symb)) +
            str.slice(str.indexOf(symb) + 1, str.length);
      }
      return str;
   };
};

const sliceFunc = sliceFuncMaker("a");
console.log(sliceFunc("A very good languange"));
