const removeFalseyValues = (val) => {
   if (typeof val === "object" && val !== null) {
      if (Array.isArray(val)) return val.filter((el) => !!el);

      const newObj = {};
      for (const key of Object.entries(val)) {
         if (key[1]) newObj[key[0]] = key[1];
      }
      return newObj;
   }
   return "Invalid data";
};
console.log(removeFalseyValues([10, true, null, "", 64, "Ani"]));
console.log(removeFalseyValues({ a: "Hello World", b: false, c: "0", d: !{} }));
