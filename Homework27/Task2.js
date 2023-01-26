const cutArrayMaker = (count) => (arr) =>
   arr.filter((_, index) => index < count);

const anotherCutArray = cutArrayMaker(2);
console.log(anotherCutArray([true, null, false, "Yes"]));
