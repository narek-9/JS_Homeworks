// Declare a valueToIndex function that takes no as a parameter
// an array of arr and a value of type str with negative values. Perform
// arr array validation, check for non-negative values
// being to the value of str in the browser's local memory (localStorage).
// store a new array under the corresponding key, in which the data
// array values ​​will be written to match their value
// under the index, under the remaining indices whose values ​​are not
// contained in the arr array, store an undefined value. A given mass
// the minimum and maximum values ​​will be respectively arr
// the largest and smallest values ​​of mass.

const valueToIndex = (arr, str) => {
    let resultArr = [];
    for (let value = Math.min(...arr); value <= Math.max(...arr); value++)
       resultArr.push(arr.includes(value) ? value : "undefined");
    resultArr = JSON.stringify(resultArr);
    localStorage.setItem(str, resultArr);
 };
 console.log(valueToIndex([3, 7, 5], "result"));
 