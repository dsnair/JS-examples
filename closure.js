/* 
==== Challenge 1: Write your own closure ====
Write a simple closure of your own creation.  Keep it simple!
*/
const outer = () => {
  const x = 3
  const inner = () => {
    return x
  }
  return inner()
}
console.log(outer())

/* 
STRETCH PROBLEM: 
==== Challenge 2: Create a counter function ====
Return a function that when invoked increments and returns a counter variable.
Example usage: 

const newCounter = counter();
newCounter(); // 1
newCounter(); // 2
*/

const counter = () => {}

/*
STRETCH PROBLEM:
==== Challenge 3: Create a counter function with an object that can increment and decrement ====
Return an object that has two methods called `increment` and `decrement`:
`increment` should increment a counter variable in closure scope and return it.
`decrement` should decrement the counter variable and return it.
*/

const counterFactory = () => {}
