"use strict";
function numArray(num) {
    return num.toString().split('').map(digit => parseInt(digit, 10));
}
const number = 12345;
const digitsArray = numArray(number);
console.log(digitsArray);
