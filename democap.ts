function capsLetter(input: string): string {
    if (!input) return input; 
    return input.charAt(0).toUpperCase() + input.slice(1);
}


let text = "hi thanya ";
let cap = capsLetter(text);
console.log(cap);
