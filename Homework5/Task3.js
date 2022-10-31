// A natural number is given. Output YES if:

// a) there are 3 digits in the digits of the number,
// b) there are no 5 digits in the digits of the number,
// c) the digits of the number are arranged in ascending order,
// d) the letters of the number are not arranged in descending order,
// e) the sum of the digits of the number is greater than twenty,
// f) the product of the digits of the number is less than thirty.
// Otherwise output NO.

let number = 7543;
let array = ("" + number).split("").map(Number);

// a)
for (let i = 0; i < array.length; i++) {
   if (i === array.length - 1) {
      array[i] === 3 ? console.log("YES") : console.log("NO");
   } else if (array[i] === 3) {
      console.log("YES");
      break;
   }
}

// b)
for (let i = 0; i < array.length; i++) {
   if (i === array.length - 1) {
      if (array[i] !== 5) {
         console.log("YES");
      } else console.log("NO");
   } else if (array[i] !== 5) {
      continue;
   } else {
      console.log("NO");
      break;
   }
}

// c)
for (let i = 0; i < array.length; i++) {
   if (i === array.length - 1) {
      console.log("YES");
   } else if (array[i] < array[i + 1]) {
      continue;
   } else if (array[i] > array[i + 1]) {
      console.log("NO");
      break;
   }
}

// d)
for (let i = 0; i < array.length; i++) {
   if (i === array.length - 1) console.log("NO");
   else if (array[i] > array[i + 1]) {
      continue;
   } else if (array[i] < array[i + 1]) {
      console.log("YES");
      break;
   }
}

// e)
let sumResult = 0;
for (let i = 0; i < array.length; i++) {
   sumResult += array[i];
}
sumResult > 20 ? console.log("YES") : console.log("NO");

// f)
let multiplyResult = 1;
for (let i = 0; i < array.length; i++) {
   multiplyResult *= array[i];
}

multiplyResult < 30 ? console.log("YES") : console.log("NO");
