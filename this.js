/* 
In your own words, explain the four principle for the "this" keyword below:

1. Window binding: The function acquires values from the global object in the window.

2. Implicit binding: 'this' keyword is bound to the object. 
The function automatically acquires values from the keys of the object in which it lives.

3. Explicit binding: The function is explicitly told to acquire values from an object referred to in .apply(), .bind(), or .call().

4. New binding: The function creates an empty object. The object's properties and methods are added by 'this'. This new object is returned at the end.

write out a code example of each explanation above
*/

// Principle 1: Window Binding ====
const x = 100
const window = function() {
  // "use strict"
  return x
}

console.log('#1: Window')
console.log(window())

// Principle 2: Implicit Binding ====
const rainbow = {
  total: 7,
  fn: implicit
}

function implicit() {
  return `A rainbow has ${this.total} colors.`
}

console.log('\n#2: Implicit')
console.log(rainbow.fn())

// Principle 3: Explicit Binding ====
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']

function explicit(colors) {
  return `A rainbow has ${this.num} colors. The colors are: ${colors}.`
}

console.log('\n#3: Explicit')
console.log('\ncall():', explicit.call(rainbow, colors))
console.log('\napply():', explicit.apply(rainbow, colors))

// const fn = rainbow.fn.bind(explicit(colors))
// console.log('\nbind():', fn())

// Principle 4: New Binding ====
function Animal(animal, food) {
    this.animal = animal
    this.food = food
    this.eats = function() {
        return `A ${this.animal} eats ${this.food}.`
    }
}

const animalObj = new Animal("goat", "grass")

console.log('\n#4: New')
console.log(animalObj)
console.log(animalObj.eats())