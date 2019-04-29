/* 
==== Challenge 1: Write your own closure ====
Write a simple closure of your own creation.  Keep it simple!
*/
const outer = () => {
  const x = 100
  const inner = () => {
    return x
  }
  return inner()
}
console.log("#1:")
console.log(outer())

/* 
STRETCH PROBLEM: 
==== Challenge 2: Create a counter function ====
Return a function that when invoked increments and returns a counter variable.
Example usage: 

const newCounter = counter()
newCounter() // 1
newCounter() // 2
*/

const counterUp = () => {
  let x = 0
  const increment = () => (x += 1)
  return increment
}
const invokeCounterUp = counterUp()
console.log("\n#2:")
console.log(invokeCounterUp())
console.log(invokeCounterUp())

// ALTERNATE solution
let x = 0
const increment = () => (x += 1)
console.log("\n#2 Alternate Solution:")
console.log(increment())
console.log(increment())

/*
STRETCH PROBLEM:
==== Challenge 3: Create a counter function with an object that can increment and decrement ====
Return an object that has two methods called `increment` and `decrement`:
`increment` should increment a counter variable in closure scope and return it.
`decrement` should decrement the counter variable and return it.
*/
const counterUpDown = () => {
  let x = 0
  return {
    increment: () => (x += 1),
    decrement: () => (x -= 1)
  }
}
const invokeCounterUpDown = counterUpDown()
console.log("\n#3:")
console.log(invokeCounterUpDown.increment())
console.log(invokeCounterUpDown.decrement())
console.log(invokeCounterUpDown.decrement())
