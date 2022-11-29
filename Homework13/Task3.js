// Declare a function that will receive an array of users as an argument. The latter
// contains objects that contain different users
// information about (name, working or not, salary (if
// works)): The function should consider and return users
// the arithmetic mean of salaries. At the same time, you should be sure that
// the user has a job

let arr = [
   {
      name: "John",
      isWorking: true,
      salary: 100000,
   },
   {
      name: "Anna",
      isWorking: false,
   },
   {
      name: "Aram",
      isWorking: true,
      salary: 50000,
   },
   {
      name: "Vahe",
      salary: 100000,
   },
];
const calculateSalary = (array) => {
   let totalSalary = 0;
   let count = 0;
   for (let i = 0; i < array.length; i++) {
      if (array[i].isWorking) {
         totalSalary += array[i].salary;
         count++;
      }
   }
   return totalSalary / count;
};
let result = calculateSalary(arr);
console.log(result);
