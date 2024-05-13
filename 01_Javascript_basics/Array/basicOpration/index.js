// Creating an Array: You can create an array using square brackets [] and separating elements with commas. 
    let myArray = [1, 2, 3, 4, 5];


// Accessing Elements: You can access elements in an array using square bracket notation with the index of the element (remember that array indices start from 0).
    console.log(myArray[0]); // Outputs: 1
    console.log(myArray[2]); // Outputs: 3

// Adding Elements: You can add elements to the end of an array using the push() method.
    myArray.push(6);
    console.log(myArray); // Outputs: [1, 2, 3, 4, 5, 6]


// Removing Elements: You can remove elements from the end of an array using the pop() method.
    myArray.pop();
    console.log(myArray); // Outputs: [1, 2, 3, 4, 5]


// Finding the Length: You can find the length of an array using the length property.
    console.log(myArray.length); // Outputs: 5


// Iterating through an Array: You can iterate through each element in an array using loop like "for" loop, "forEach()" method, etc.
    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }
    
    // Using forEach
    myArray.forEach(function(element) {
        console.log(element);
    });
  

// Finding Index of an Element: You can find the index of a particular element in an array using the indexOf() method.
    console.log(myArray.indexOf(3)); // Outputs: 2


// Removing Elements by Index: You can remove elements from a specific index using the splice() method.
    myArray.splice(2, 1); // Removes 1 element starting from index 2
    console.log(myArray); // Outputs: [1, 2, 4, 5]
