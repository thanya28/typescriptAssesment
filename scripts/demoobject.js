"use strict";
function mapKeys(obj, keyMapper) {
    return Object.keys(obj).reduce((result, key) => {
        let newKey = keyMapper(key);
        result[newKey] = obj[key];
        return result;
    }, {});
}
const os = { name: "Thanya", age: 21 };
const out = mapKeys(os, key => key.toUpperCase());
console.log(out);
