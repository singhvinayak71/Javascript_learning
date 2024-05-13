// 01.

// function avg(a, b) {
//   return (a + b) / 2;
// }

// c1 = avg(4, 6);
// c2 = avg(14, 16);
// console.log(c1, c2);

// 02
function calculateAvarage() {
  if (arguments.length === 0) {
    // console.log(`there is no number`);
    return 0;
  }
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total / arguments.length;
}
const numbers = [5, 10, 15, 20, 25, 30];
const avg = calculateAvarage.apply(null, numbers);
console.log("Average:", avg);

// 03.
// apply()
function myFunction(x, y) {
  console.log("This value:", this);
  console.log("Arguments:", x, y);
}

const obj = { name: "John" };

// Call myFunction with obj as the 'this' value and arguments 10 and 20
myFunction.apply(obj, [10, 20]);



// 04.
let age = 27;
if (age > 32) {
  console.log("You are not a kid");
} else if (age > 26) {
  console.log("Shadi kr lo ab");
} else if (age > 22) {
  console.log("Job ki try kro");
} else if (age >= 18) {
  console.log("padhai pr dhyan do abhi");
} else {
  console.log("you are a kid");
}
