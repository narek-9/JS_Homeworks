class User {
   constructor(name, cash) {
      this.name = name;
      this.cash = cash;
      this.products = {};
   }
}

const appleStore = (device, price) => {
   return (obj) => {
      if (obj.cash - price >= 0) {
         obj.cash -= price;
         if (obj.products[device]) {
            obj.products[device]++;
            return obj;
         }
         obj.products[device] = 1;
         return obj;
      }
      alert(`You don't have enough cash to buy this ${device}`);
      return obj;
   };
};

const buyAirpods = appleStore("airpods", 200);
const buyMacbook = appleStore("macbook", 1400);
const buyAppleWatch = appleStore("appleWatch", 400);
const buyMagSafeCharger = appleStore("magSafe", 50);
const buyIphone = appleStore("iphone", 800);

let john = new User("John", 3000);
let ani = new User("Ani", 2000);
let smith = new User("Smith", 500);
