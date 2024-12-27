"use strict";
function Average(array, mapFn) {
    const total = array.reduce((sum, item) => sum + mapFn(item), 0);
    return total / array.length;
}
let numbers = [1, 2, 3, 4, 5];
let average = Average(numbers, num => num * 2);
console.log(average);
