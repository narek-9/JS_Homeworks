// Create a function that takes an object as a parameter and calculates the sum of the salaries of the various individuals stored in that object.

let obj = {
   Aram: 90000,
   Anna: 200000,
   Alex: 150000,
};

const sumSalary = (obj) => {
   let sum = 0;
   for (const salary of Object.values(obj)) {
      if (typeof salary !== "number") continue;
      sum += salary;
   }
   return sum;
};
console.log(sumSalary(obj));
