const multipleActions = (arr, actionType, i = null) => {
   //    const validate = (arr, i) => {
   //       if (!Array.isArray(arr)) {
   //          return false;
   //       } else if (
   //          typeof i !== "number" ||
   //          i < 0 ||
   //          !Number.isInteger(i) ||
   //          isNaN(i)
   //       ) {
   //          return false;
   //       }
   //       return true;
   //    };
   //    if (validate()) {
   switch (actionType) {
      case "Primary sum":
         let sum = 0;
         for (let j = 0; j < i; j++) {
            sum += arr[j];
         }
         return sum;
      case "Secondary sum":
         let sumValues = 0;
         for (let j = arr.length - 1; j > i; j--) {
            sumValues += arr[j];
         }
         return sumValues;
      case "Array with smaller index values":
         let newArray = [];
         for (let j = 0; j < i; j++) {
            newArray.push(arr[j]);
         }
         return newArray;
      case "Array values with zero remainder":
         let newArr = [];
         for (let j = 0; j < arr.length; j++) {
            if (arr[j] % i === 0) {
               newArr.push(arr[j]);
            }
         }
         return newArr;

      case "Array with square values":
         let array = [];
         for (let j = 0; j < arr.length; j++) {
            array.push(arr[j] ** 2);
         }
         return array;
      default:
         return arr;
   }
   //    }
};

const arr = [1, 2, 3, 4, 5];
let index = 4,
   actionType = "Array with smaller index values";
console.log(multipleActions(arr, actionType, index));
