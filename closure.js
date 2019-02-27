/* 
==== Challenge 1: Write your own closure ====
Write a simple closure of your own creation.  Keep it simple!
*/
const outer = () => {
  const x = 0
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

counter(); // 1
counter(); // 2
*/
let counter = 0;
increment = () => {
  return counter += 1
}
console.log(increment())
console.log(increment())

/*
STRETCH PROBLEM:
==== Challenge 3: Create a counter function with an object that can increment and decrement ====
Return an object that has two methods called `increment` and `decrement`:
`increment` should increment a counter variable in closure scope and return it.
`decrement` should decrement the counter variable and return it.
*/

// const counterFactory = () => {
//   let x = 0
//   return {
//     increment: () => (x += 1),
//     decrement: () => (x -= 1)
//   }
// }
// console.log(counterFactory.increment())
// console.log(counterFactory.decrement())
