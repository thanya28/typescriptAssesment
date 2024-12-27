function all<T>(collection: T[], predicate: (value: T) => boolean): boolean {
    return collection.every(predicate);
}


let isEven = (num: number) => num % 2 === 0;

let num1 = [2, 4, 6, 8];
console.log(all(num1, isEven)); 

let num2 = [2, 4, 5, 8];
console.log(all(num2, isEven)); 