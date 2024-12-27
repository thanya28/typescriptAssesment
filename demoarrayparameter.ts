function invoke<T, R>(fns: ((...args: T[]) => R)[], ...args: T[]): R[] {
    return fns.map(fn => fn(...args));
}


let add = (a: number, b: number) => a + b;
let multiply = (a: number, b: number) => a * b;


const functions = [add, multiply];
const results = invoke(functions, 5, 3);

console.log(results); 
