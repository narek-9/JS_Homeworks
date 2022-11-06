let amountUsers = +prompt("How many users should there be?");
let users = [];
let numberOfUser = 1;
while (users.length < amountUsers) {
   let user = {};
   alert("User " + numberOfUser);
   const firstName = prompt("Enter your first name"),
      lastName = prompt("Enter your last name"),
      patronymic = prompt("Enter your patronymic");

   let age = +prompt("Enter your age");
   while (isNaN(age)) {
      age = +prompt("Enter your age again");
   }

   let skills = [],
      count = 1;
   while (skills.length < 3) {
      let skill = prompt("Enter skill number " + count);
      skills.push(skill);
      count++;
   }

   let children = [];
   count = 1;
   while (children.length < 2) {
      let child = {
         firstName: prompt("Enter child number " + count + " first name"),
         lastName: prompt("Enter child number " + count + " last name"),
         age: +prompt("Enter child number " + count + " age"),
      };
      children.push(child);
      count++;
   }

   let address = {
      userCity: prompt("Enter your city"),
      userStreet: prompt("Enter your street"),
   };

   user.firstName = firstName;
   user.lastName = lastName;
   user.patronyumic = patronymic;
   user.age = age;
   user.skills = skills;
   user.children = children;
   user.address = address;

   users.push(user);
   console.log(user);
   numberOfUser++;
}
