// 1.  Basic for loop 
for(let i = 0; i < 5; i++){
    console.log(i)
}

// looping through array:
let fruits = ["Banana", "Apple", "Pomegranete", "Orange", "Papaya"];
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}


// 2. while loop
let count = 0;
while(count < 5){
    console.log(`Count is: ${count}`);
    count++;
}

// 3. do..while loop:-

do {
  console.log("Count is: " + count);
  count++;
} while (count < 5);



// 4. for..in loop:- The for...in loop in JavaScript is used to iterate over the enumerable properties of an object 
// looping through object:

let person ={
    name : "vinayak singh",
    age: 26,
    gender: "male"
}

for(let key in person){
    console.log(key+ ": " + person[key])
}


// 5. for.. of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc.
const arr = [1, 2, 3, 4, 5];

for (let element of arr) {
  console.log(element);
}
