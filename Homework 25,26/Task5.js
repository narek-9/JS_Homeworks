const reverseArray = (arr) => {
   const newArr = [];
   for (let i = arr.length - 1; i >= 0; i--) {
      newArr.push(arr[i]);
   }
   return newArr;

   // or

   //    for (let i = 0; i < arr.length / 2; i++) {
   //       const temp = arr[i];
   //       arr[i] = arr[arr.length - i - 1];
   //       arr[arr.length - i - 1] = temp;
   //    }
   //    return arr;
};

console.log(reverseArray([1, 2, 3, 4, 5, 6]));
