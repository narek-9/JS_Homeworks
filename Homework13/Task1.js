class Car {
   constructor(brand, releaseYear, cost, hasOwner) {
      this.brand = brand;
      this.releaseYear = releaseYear;
      this.cost = cost;
      this.hasOwner = hasOwner;
   }

   checkOwner() {
      console.log(
         this.hasOwner ? `${this.brand} has an owner` : `${this.brand} is free`
      );
   }
   calculateYears() {
      return new Date().getFullYear() - this.releaseYear;
   }

   costInfo() {
      this.cost < 3000
         ? console.log(`This ${this.brand} is a cheap car`)
         : this.cost >= 3000 && this.cost < 10000
         ? console.log(`This ${this.brand} has medium cost`)
         : this.cost >= 10000
         ? console.log(`This ${this.brand} is an expensive car`)
         : undefined;
   }

   needNewCar() {
      return this.calculateYears() > 20;
   }
}
const bmw = new Car("BMW", 2002, 8000, true);
