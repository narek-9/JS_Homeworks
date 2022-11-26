class User {
   #salary = 0;
   constructor(name, surname, age, salary) {
      this.name = name;
      this.surname = surname;
      this.age = age;
      this.#salary = salary;
   }
   getFullname() {
      alert(`${this.name} ${this.surname}`);
   }
   checkUserSalary() {
      alert(this.#salary > 500000 ? "rich" : "average");
   }
   getNumberOfLettersOfName() {
      alert(`number of letters of name = ${this.name.length}`);
   }
   getUserAge() {
      if (this.age > 0 && this.age < 4) alert("baby");
      else if (this.age >= 5 && this.age <= 14) alert("child");
      else if (this.age >= 15 && this.age <= 18) alert("teenager");
      else if (this.age >= 19 && this.age <= 30) alert("young");
      else if (this.age >= 31 && this.age <= 60) alert("adult");
      else alert("old");
   }
}

let obj = new User("John", "Jones", 5, 8000);
let anna = new User("Anna", "Jones", 29, 600000);
obj.getFullname();
obj.checkUserSalary();
obj.getNumberOfLettersOfName();
obj.getUserAge();
