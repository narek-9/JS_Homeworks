// Import 4 numbers, for each of them count and output the sum of natural numbers from 1 to that number.

let i = 0;
while (i !== 4) {
   let number = +prompt("Enter number");
   function Sum() {
      let sum = 0;
      for (; number > 0; number--) {
         sum += number;
      }
      return "Sum = " + sum;
   }
   console.log(Sum(number, sum));
   i++;
}
