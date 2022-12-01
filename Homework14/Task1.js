// Declare a function that takes the parameter received as an argument
// will perform the deep copy operation

const deepCopy = (value, abc) => {
   if (Array.isArray(value)) {
      const arr = [];
      for (const currentItem of value) {
         const copiedItem = deepCopy(currentItem);
         arr.push(copiedItem);
      }
      return arr;
   } else if (typeof value === "object" && value !== null) {
      const obj = {};
      for (const key in value) {
         const copiedItem = deepCopy(value[key]);
         obj[key] = copiedItem;
      }
      return obj;
   }
   return value;
};
console.log(deepCopy([1, 2, 3, { name: "John", obasdaj: { a: 30, b: 45 } }]));
