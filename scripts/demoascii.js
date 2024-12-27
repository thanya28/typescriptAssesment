"use strict";
function removeASCII(input) {
    return input.replace(/[^\x20-\x7E]/g, '');
}
let oString = "Hello\u0006Thanya\\Goodmrng\u0007";
let res = removeASCII(oString);
console.log(res);
