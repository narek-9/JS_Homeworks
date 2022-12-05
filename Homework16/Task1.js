const multipleActions = (arr, i, actionType) => {
   if (validate(arr, i, actionType)) {
      switch (actionType) {
         case "Primary sum":
            let sum = 0;
            for (let j = 0; j < i; j++) {
               sum += arr[j];
            }
            return sum;
         case "Secondary sum":
            let sumValues = 0;
            for (let j = arr.length - i; j < arr.length; j++) {
               sumValues += arr[j];
            }
            return sumValues;
         case "Array with smaller index values":
            arr.splice(i, arr.length - 1);
            return arr;
         case "Array values with zero remainder":
            return arr.filter((value) => !(value % i));
         case "Array with square values":
            arr.forEach((value, index) => (arr[index] = value ** 2));
            return arr;
         default:
            return arr;
      }
   }
   return "Enter valid values";
};

const arr = [1, 2, 3, 4, 5];
let index = 3,
   actionType = "Array values with zero remainder";

const validate = (arr, i, actionType) => {
   if (!Array.isArray(arr)) return false;
   else if (!Number(i) || !Number.isInteger(i) || i > arr.length) {
      return false;
   } else if (typeof actionType !== "string" || actionType.length === 0) {
      return false;
   }
   return true;
};

console.log(multipleActions(arr, index, actionType));
