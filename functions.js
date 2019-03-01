/* 
CALLBACKS

Step 1: Create a higher-order function that accepts a callback
* Create a higher-order function named consume that can take 3 parameters.
* The first two parameters can accept any argument
* The last parameter accepts a callback 
* In the body of the function return the callback with the two parameters that you created

Step 2: Create several functions to callback with consume();
* Create a function named add that returns the sum of two numbers
* Create a function named multiply that returns the product of two numbers 
* Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"

Step 3: Check your work by un-commenting the following calls to consume(): 
*/

const add = (a, b) => a + b
const multiply = (a, b) => a * b
const greeting = (firstName, lastName) =>
  `Hello ${firstName} ${lastName}, nice to meet you!`
const consume = (arg1, arg2, cb) => {
  return cb(arg1, arg2)
}

console.log('Add:', consume(2, 2, add)) // 4
console.log('Multiply:', consume(10, 16, multiply)) // 160
console.log('Greeting:', consume('Mary', 'Poppins', greeting)) // Hello Mary Poppins, nice to meet you!

/*
CLOSURES

Explain in your own words why `nestedfunction()` can access the variable `internal`.

Explaination:

A closure is a feature in JS where an inner function has access to:
- the variables defined within its outer (enclosing) function
- the variables defined within its own scope (curly brackets)
- global variables defined in the window object

The inner function preserves (closures) the value of the outer function's variable when that outer function is executed. 

In the example below, the inner function `nestedFunction()` can access and preserve `internal` due to closures.
*/

const external = "I'm outside the function"

function myFunction() {
  console.log(external)
  const internal = "Hello! I'm inside myFunction!"

  function nestedFunction() {
    console.log(internal)
  }
  nestedFunction()
}
myFunction()