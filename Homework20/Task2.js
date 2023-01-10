// Declare a makeMap function that takes obj as a parameter
// object, creates a map with its values ​​and returns it.

// by entries
const makeMap = (obj) => new Map(Object.entries(obj));
const newObj = { name: "Ani", age: 26, salary: 350000 };
const map = makeMap(newObj);
console.log(map);

// by forin
const makeMapByForin = (obj) => {
   const a = new Map();
   for (const item in obj) {
      a.set(item, obj[item]);
   }
   return a;
};
