let john = { name: "John", surname: "Smith", id: 1 },
   mary = { name: "Mary", surname: "Key", id: 2 },
   david = { name: "Dabid", surname: "Jones", id: 3 };

let users = [john, mary, david];

const makeFullname = (arr) => {
   let newArr = [];
   arr.forEach((element) => {
      newArr.push({
         fullname: `${element.name} ${element.surname}`,
         id: element.id,
      });
   });
   return newArr;
};

console.log(makeFullname(users));
