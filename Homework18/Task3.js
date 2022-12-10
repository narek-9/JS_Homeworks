// Declare a multiplyNumeric function that takes a person object as a parameter.
// multiplyNumeric function ust double all numeric values ​​in the object
// and return the transformed resulting object.

const multiplyNumeric = (person) => {
   for (const key in person) {
      person[key] =
         typeof person[key] === "number" ? person[key] * 2 : person[key];
   }
   return person;
};
console.log(
   multiplyNumeric({
      name: "David",
      age: 23,
      salary: 1100,
      isWorking: true,
      childs: 2,
   })
);
