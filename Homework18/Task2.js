// Declare a sortByAge function that takes an array of users as a parameter.
// The latter contains objects containing user data. The sortByAge function
// should sort the users array according to the age of the users and return the result
// mass.

const sortByAge = (users) =>
   users.sort((element1, element2) => element1.age - element2.age);

console.log(
   sortByAge([
      { name: "Ani", age: 21 },
      { name: "Alex", age: 17 },
      { name: "Nare", age: 34 },
      { name: "Mark", age: 20 },
   ])
);
