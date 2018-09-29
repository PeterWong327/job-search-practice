// EXERCISE 1
// The function below takes in an object, and based on the object returns either
// 'hey amy', or 'hey arnold'.
// On line 23, I want the to console log 'hey amy', but when run in node it only
// console-logs 'hey arnold'.
// Why is the function currently returning 'hey arnold', and what can we do to
// produce the desired output?
// Note: the function should always take an object as an argument, and should
// simply return a string.


// Your explanation:
// The original function checks if the argument is equal to the object with name: 'amy', using ==.
// Changing the conditional to key in to the argument's name value and using === to check if that name is equal
// to 'amy' returns the correct string.

function greet (person) {
  if (person.name === 'amy') {
    return 'hey amy';
  } else {
    return 'hey arnold';
  }
}

console.log(greet({ name: 'amy' }));


// EXERCISE 2
// The function below runs a loop based on the value of i.
// I want this function to set 4 Timeouts, and after 0 seconds
// console log "0, 1, 2, 3." Instead, the loop currently returns "4, 4, 4, 4."
// Why is the function returning 4s instead of counting up, and what
// can we do to produce the desired output?
// Note: the function should still loop, should always create 4
// setTimeouts (ie: maintain its' asynchronicity), and always console-log based
// on the value of i.

// Your explanation:
//Use let instead of var in for loop

for (let i = 0; i < 4; i += 1) {
  setTimeout(() => console.log(i), 0);
}

// EXERCISE 3
// The code below sets an object with the properties of name and sayName to the
// variable dog.  It then assigns the sayName property of dog to the variable sayName
// and finally invokes sayName.  I want sayName() to return 'doggo', but currently it
// throws an error.
// Why is sayName() throwing an error, and what can we do to get the desired output?
// Note: dog should stay a POJO, do not turn it into a class.  sayName should
// stay a function so that it can be invoked on line 62

// Your explanation:
// sayName doesnt need to be invoked when calling the variable. dog.sayName needs to be invoked

let dog = {
  name: 'doggo',
  sayName () {
    console.log(this.name);
  }
};

const sayName = dog.sayName();

console.log(sayName);


// EXERCISE 4
// The code below establishes a Dog constructor function, defines the .bark
// method, then instantiates a new Dog.  On line 83, I want fido.bark() to return
// 'fido says woof', but instead I get an error.  Why is this error thrown, and
// how can we change the code to get the desired output?

// Your explanation:

function Dog (name) {
  this.name = name;
}

Dog.bark = function () {
  console.log(this.name + ' says woof');
};

let fido = new Dog('fido');

fido.bark();
