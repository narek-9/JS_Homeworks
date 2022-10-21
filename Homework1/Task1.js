// Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of the abgles of a triangle equals 180 degrees.)

"use strict";


let min = 1;
let max = 90;

let firstAngle = Math.floor(Math.random()*(max - min) ) + min;
console.log("First angle of the triangle = " + firstAngle);

let secondAngle = Math.floor(Math.random()*(max - min) ) + min;
console.log("Second angle of the triangle = " + secondAngle);

let thirdAngle = 180 - firstAngle - secondAngle;
console.log("Third angle of the triangle = " + thirdAngle);
