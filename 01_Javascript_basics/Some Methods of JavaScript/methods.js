// 1. Array Methods:
// push(), pop(), shift(), unshift() : Manipulate the content of an array
    const manipulateArr = [1, 2, 3, 4, 5];
    manipulateArr.push(9);
    // manipulateArr.pop();
    manipulateArr.unshift(0);
    // manipulateArr.shift()
    // console.log(manipulateArr);

// concat(): merge array
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = ["one", "two", "three", "four", "five"]
    const mergeArr = arr1.concat(arr2);


// join(): convert arrays to strings;
    const oneArr = ['hello', 'this', 'javascript', 'array', 'join', 'method']
    const joinOne = oneArr.join()
    const joinTwo = oneArr.join(" 🎰 ")
    console.log(joinTwo);




// slice(), splice(): Extract or insert elements into an array

    // splice():
    // example1
    const arrForSplice = ['One', 'Five', 'Six', 'Seven'];
    arrForSplice.splice(1, 0, 'Two', 'Three')
        // Inserts at index 1
    console.log(arrForSplice);

    // example2
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 1, "Lemon", "Kiwi");

    // example3
    const months = ['Jan', 'March', 'April', 'June'];
    months.splice(1, 0, 'Feb');
    console.log(months);

    // example4

// 2. String Methods:
// toUpperCase(), toLowerCase(): convert case

// trim(): Remove whitespace from ends and start of a string

// charAt(), charcodeat(): Access characters.

// indexOf(), lastIndexOf(): Find the position of substring.

// subString(), substr(), slice(): Extract substrings.

// 3. Object Methods:
// Object.keys(), Object.values(), Object.entries(): Extract keys, values, or entries from an object.

// hasOwnProperty(): check if an object has specific property.

// 4. Number Methods:
// tofixed(), toPrecision(), toString(), Convert number to string with specific farmatting.

// parseInt(), parseFloat(): parse strings into numbers.

// 5. Function Methods:
// call(), apply(), bind(): Manipulate the context('this' value) of a function
