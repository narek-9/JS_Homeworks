// Declare a makeObject function that takes a map as a parameter
// value, creates an object with its values ​​and returns it.

// by fromEntries
const makeObject = (map) => Object.fromEntries(map);

// by forof
const makeObjectByForof = (map) => {
   const obj = {};
   for (const item of map) {
      obj[item[0]] = item[1];
   }
   return obj;
};
// by forEach
const makeObjectByForeach = (map) => {
   const obj = {};
   newMap.forEach((value, key) => {
      obj[key] = value;
   });
   return obj;
};

const newMap = new Map([
   ["name", "Ani"],
   ["age", 26],
   ["salary", 350000],
]);

const obj = makeObject(newMap);
console.log(obj);
