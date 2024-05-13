// Function methods: - call(), apply(), bind();

// call():
function greet(){
    console.log(`Hello ${this.name}`)
}

let person = {
    name : "Vinayak singh"
}

greet.call(person);


// apply():

function greet(greeting) {
    console.log(`${greeting}, ${this.name}!`);
}

greet.apply(person, ['Good morning']); 



// call():

function greet() {
    console.log(`Hello, ${this.name}!`);
}
const greetPerson = greet.bind(person);
greetPerson();
