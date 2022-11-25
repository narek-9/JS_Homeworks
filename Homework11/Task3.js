function validateValue(value, areRows = false) {
   if (typeof value === "number" && !isNaN(value)) {
      return value;
   }
   // if(areRows){
   //     return 7;
   // }
   // return 6;
   return areRows ? 7 : 6;
}

function drawShape(rows, columns) {
   rows = validateValue(rows, true);
   columns = validateValue(columns);
   let result = "";
   for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= columns; j++) {
         if (i === 1 || i === rows || j === 1 || j === columns) {
            result += "* ";
         } else {
            result += "  ";
         }
      }
      result += "\n";
   }
   return result;
}
console.log(drawShape(7, 6));
