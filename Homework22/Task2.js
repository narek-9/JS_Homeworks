let john = { name: "John", surname: "Smith", id: 1 },
   mary = { name: "Mary", surname: "Key", id: 2 },
   david = { name: "Dabid", surname: "Jones", id: 3 };

let users = [john, mary, david];

const makeFullname = (persons) =>
   persons.reduce(
      (data, value) =>
         data.concat({
            fullname: `${value.name} ${value.surname}`,
            id: value.id,
         }),
      []
   );

console.log(makeFullname(users));
