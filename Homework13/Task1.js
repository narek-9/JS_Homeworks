class Car {
   constructor(brand, releaseYear, cost, hasOwner) {
      this.brand = brand;
      this.releaseYear = releaseYear;
      this.cost = cost;
      this.hasOwner = hasOwner;
   }

   checkOwner() {
      console.log(this.hasOwner ? "BMW has an owner" : "BMW is free");
   }
   calculateYears() {
      return new Date().getFullYear() - this.releaseYear;
   }

   costInfo() {
      this.cost < 3000
         ? console.log("This BMW is a cheap car")
         : this.cost >= 3000 && this.cost < 10000
         ? console.log("This BMW has medium cost")
         : this.cost >= 10000
         ? console.log("This BMW is an expensive car")
         : undefined;
   }

   needNewCar() {
      return new Date().getFullYear() - this.releaseYear > 20;
   }
}
const bmw = new Car("BMW", 2002, 8000, true);
