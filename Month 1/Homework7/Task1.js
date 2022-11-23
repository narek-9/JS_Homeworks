let user = {};
const firstName = prompt("Enter user's firstName");
const lastName = prompt("Enter user's lastName");
const patronyumic = prompt("Enter user's patronyumic");
let age = +prompt("Enter user's age");
const skills = [];
let count = 1;
while (skills.length < 3) {
   let skill = prompt("Enter skill. Number: " + count);
   count++;
   skills.push(skill);
}

const children = [];
count = 1;
while (children.length < 2) {
   let child = {
      firstName: prompt("Enter child number " + count + " firstname"),
      lastName: prompt("Enter child number " + count + " lastname"),
      age: +prompt("Enter child number " + count + " age"),
   };
   children.push(child);
   count++;
}

const address = {
   city: prompt("Enter city"),
   street: prompt("Enter street"),
};

user.firstName = firstName;
user.lastName = lastName;
user.patronyumic = patronyumic;
user.age = age;
user.skills = skills;
user.children = children;
user.address = address;

console.log(user);
