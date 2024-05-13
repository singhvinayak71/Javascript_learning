// Array methods:
// 1. push(), pop();
// 2. unshift(), shift();
// 3. slice(), splice();
// 4. forEach();
// 4. map(), reduce(), filter();
// 5. concat();

// Here are some more useful methods for working with arrays in JavaScript:
// 1. indexOf(), lastIndexOf();
// 2. include();
// 3. some(), every(), find();
// 4. reverce();
// 5. findIndex();

// 1. findIndexOf();

let arrays = [10, 20, 30, 40, 50];
let index = arrays.findIndex((element) => element == 40); // return index number
console.log(`findIndex: `, index);

// 2. indexOf, lastIndexOf(), includes(), reverse()
let element = 50;
let indexof = arrays.indexOf(element); // return index number of element || return -1
console.log(`IndexOF: `, indexof);

let lastIndexOf = arrays.lastIndexOf(element);
console.log(`lastIndexOF: `, lastIndexOf);

console.log(`includes: `, arrays.includes(50));

let reverce = arrays.reverse(); // reverse method
console.log(`Array reverse: `, reverce);

// 3. some(), every() and find()
const array = [1, 2, 3, 4, 5];
const every = array.every((element) => element > 1);
const find = array.find((element) => element > 3);
const some = array.some((element) => element > 3);
console.log(every); // false
console.log(find); // 4
console.log(some); // true
