// Object.assign()
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
console.log(target); // Output: { a: 1, b: 4, c: 5 }

const mergedObject = Object.assign(target, source);

console.log(mergedObject); // Output: { a: 1, b: 4, c: 5 }
console.log(target); // Output: { a: 1, b: 4, c: 5 }
console.log(source)