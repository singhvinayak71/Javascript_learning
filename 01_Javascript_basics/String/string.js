// 1. Declaration: You can declare a string using single quotes ('), double quotes ("), or backticks (`). Backticks are used for template literals, which allow for interpolation and multiline strings.

let singleQuoted = "Hello";
let doubleQuoted = "World";
let backticks = `Hello World`;

// 2. String Length: You can find the length of a string using the length property.
let str = "Hello";
console.log(str.length); // Output: 5

// 3. Accessing Characters: You can access individual characters in a string using bracket notation, with the index starting from 0.
let str1 = "Hello";
console.log(str1[0]); // Output: "H"
console.log(str1.charAt(1)); // Output: "e"

// 4. Concatenation: You can concatenate strings using the + operator or the concat() method.
let str2 = "World";
console.log(str1 + " " + str2); // Output: "Hello World"
console.log(str1.concat(" ", str2)); // Output: "Hello World"

// 5. Substring: You can extract a substring from a string using substring() or slice().
let str3 = "Hello World";
console.log(str3.substring(0, 5)); // Output: "Hello"
console.log(str3.slice(6)); // Output: "World"

//6. String Methods: JavaScript provides a variety of methods for working with strings, including toUpperCase(), toLowerCase(), indexOf(), lastIndexOf(), replace(), split(), and many more.
let str4 = "hello world"
console.log(str4.toUpperCase()); // Output: "HELLO WORLD"
console.log(str4.indexOf("o")); // Output: 4
console.log(str4.split(" ")); // Output: ["Hello", "World"]

// 7. Template Literals: Template literals allow for embedding expressions inside strings using ${}.
let name = "Alice";
console.log(`Hello, ${name}!`); // Output: "Hello, Alice!"
