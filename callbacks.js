/* 
Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array. Study both the problem and the solution to figure out the rest of the problems.
*/

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum']

/* 
// Given this problem: 

function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
}

// Potential Solution:

// Higher order function using "cb" as the call back
function firstItem(arr, cb) {
  return cb(arr[0]);
}

// Function invocation 
firstItem(items, function(first) {
  console.log(first)
});
*/

const paramCB = param => param

// 1. getLength passes the length of the array into the callback.
const getLength = (arr, cb) => {
  return cb(arr.length)
}
console.log(getLength(items, paramCB))

// 2. last passes the last item of the array into the callback.
const last = (arr, cb) => {
  return cb(arr.slice(-1)[0])
}
console.log(last(items, paramCB))

// 3. sum adds two numbers (x, y) and passes the result to the callback.
const sum = (x, y, cb) => {
  return cb(x + y)
}
console.log(sum(3, 3, paramCB))

// 4. multiply multiplies two numbers and passes the result to the callback.
const multiply = (x, y, cb) => {
  return cb(x * y)
}
console.log(multiply(3, 3, paramCB))

/* 
5. contains checks if an item is present inside of the given array. 
Pass true to the callback if it is, otherwise pass false.
*/
const contains = (item, arr, cb) => {
  return cb(arr.includes(item))
}
console.log(contains('Sharpener', items, paramCB))
console.log(contains('Pencil', items, paramCB))

/* 
STRETCH PROBLEM: 
removeDuplicates removes all duplicate values from the given array. Pass the duplicate free array to the callback function. Do not mutate the original array.
*/

const removeDuplicates = (arr, cb) => {}
