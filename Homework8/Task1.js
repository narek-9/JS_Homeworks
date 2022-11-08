// Write a function that takes a natural number n as an argument and returns:
// a) how many times does the first digit occur in it,

// a

function getCount() {
   let n = +prompt("Enter natural number"),
      array = [];
   while (isNaN(n)) {
      n = +prompt("Enter natural number again");
   }

   while (n !== 0) {
      let lastDigit = n % 10;
      n = (n - lastDigit) / 10;
      array.unshift(lastDigit);
   }

   let count = 0;
   for (let i = 1; i < array.length; i++) {
      if (array[i] === array[0]) {
         count++;
      }
   }
   return array[0] + " occurs " + count + " times";
}

console.log(getCount());
