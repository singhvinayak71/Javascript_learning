// methods of numbers
//1. toFixed(), toPrecision(), toLocaleString(), toString(),  
//2. isInteger(), isSafeInteger(),
//3. parseInt()


// Number.toFixed(): 
let num = 3.14159;
console.log(num.toFixed(2)); // Output: "3.14"

// Number.toPrecision():
let num1 = 123.456;
console.log(num.toPrecision(4)); // Output: "123.5"

// Number.toString(): Converts a number to a string.
console.log((10).toString().length); // Output: "2"

// Number.toLocaleString():
let number = 1234567.89;
console.log(number.toLocaleString());  // output: 12,34,567.89

// Number.parseInt(): Parses a string argument and returns an integer.
console.log(Number.parseInt('10')); // Output: 10
console.log(Number.parseInt('10.5')); // Output: 10

// Number.isInteger(): Checks if a value is an integer.
console.log(Number.isInteger(10)); // Output: true
console.log(Number.isInteger(3.14)); // Output: false

// Number.isSafeInteger(): 
console.log(Number.isSafeInteger(9007199254740991)); // Output: true
console.log(Number.isSafeInteger(9007199254740992)); // Output: false
