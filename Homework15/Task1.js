class Human {
   constructor(name, age, isWorking) {
      this.name = name;
      this.age = age;
      this.isWorking = isWorking;
   }
   setName = (name) => (this.name = name);
   getName = () => this.name;

   setAge = (age) => (this.age = age);
   getAge = () => this.age;
   setIsWorking = (isWorking) => (this.isWorking = isWorking);
   getIsWorking = () => this.isWorking;

   getInfo = () =>
      `Hello. I'm ${this.getName()}. I'm ${this.getAge()} years old. I'm ${
         this.getIsWorking() ? "" : "not "
      }working `;

   //    birthYear = () => {
   //       const date = new Date();
   //       const currentYear = date.getFullYear();
   //       return currentYear - this.getAge();
   //    };
   birthYear = () => new Date().getFullYear() - this.getAge();
}

class Footballer extends Human {
   constructor(name, age, isWorking) {
      super(name, age, isWorking);
   }
   run = (speed) => {
      this.speed = speed > 0 ? speed : 0;
      return `I'm ${this.getName()}. I'm running right now. My speed is ${
         this.speed
      } `;
   };
   message = () => alert(this.speed === undefined ? 0 : this.speed);
}

class Singer extends Human {
   constructor(name, age, isWorking) {
      super(name, age, isWorking);
   }

   sing = () => `${this.getName()} is singing for ${this.getAge()} years`;
}
