const removeFalseyValues = (val) => {
   if (valueValidation(val)) {
      if (Array.isArray(val)) return val.filter((el) => !!el);

      const newObj = {};
      for (const key in val) {
         if (val[key]) newObj[key] = val[key];
      }
      return newObj;
   }
   return "Invalid data";
};
const valueValidation = (value) => typeof value === "object" && value !== null;

console.log(removeFalseyValues([10, true, null, "", 64, "Ani"]));
console.log(removeFalseyValues({ a: "Hello World", b: false, c: "0", d: !{} }));
