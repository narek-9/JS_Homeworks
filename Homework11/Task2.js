// Create a function that prints all possible two-digit values ​​('00', '01', '02', ..., '98', '99')

function printTwodigitValues() {
   let i = 0;
   while (i < 100) {
      if (i < 10) i = "0" + i.toString();
      console.log(i);
      i++;
   }
}
printTwodigitValues();
