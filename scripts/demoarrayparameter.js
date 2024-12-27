"use strict";
function invoke(fns, ...args) {
    return fns.map(fn => fn(...args));
}
let add = (a, b) => a + b;
let multiply = (a, b) => a * b;
const functions = [add, multiply];
const results = invoke(functions, 5, 3);
console.log(results);
