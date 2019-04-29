/* 
YouTube lecture link: https://www.youtube.com/watch?v=RkJO0QjaZyI

class = function GameObject(props) 
constructor = a function for the contents of function GameObject(props), i.e. {this.props = props}
extends = Object.create()
super = GameObject.call() & Object.create(), i.e. inherits the reference to THIS from parent class and all its methods
*/

/*
=== GameObject ===
* createdAt
* name
* dimensions (These represent the character's size in the video game)
* destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// parent class
class GameObject {
  constructor(goParams) {
    this.createdAt = goParams.createdAt
    this.name = goParams.name
    this.dimensions = goParams.dimensions
  }
  // methods
  destroy() {
    return `${this.name} was removed from the game.`
  }
}

/*
=== CharacterStats ===
* healthPoints
* takeDamage() // prototype method that returns: `${<object name>} took damage.`
* should inherit destroy() from GameObject's prototype
*/

// subclass of GameObject
class CharacterStats extends GameObject {
  constructor(csParams) {
    super(csParams)  // inherits goParams and destroy()
    this.healthPoints = csParams.healthPoints
  }
  // subclass methods
  takeDamage() {
    return `${this.name} took damage.`
  }
}

/*
=== Humanoid (Having an appearance or character resembling that of a human) ===
* team
* weapons
* language
* greet() // prototype method that returns: `${<object name>} offers a greeting in ${this.language}.`
* should inherit destroy() from GameObject through CharacterStats
* should inherit takeDamage() from CharacterStats
*/

// subclass of CharacterStats
class Humanoid extends CharacterStats {
  constructor(hParams) {
    super(hParams)
    this.team = hParams.team
    this.weapons = hParams.weapons
    this.language = hParams.language
  }
  // subclass methods
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`
  }
}

/*
* Inheritance chain: GameObject -> CharacterStats -> Humanoid
* Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
* Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: ['Staff of Shamalama'],
  language: 'Common Tongue'
})

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: ['Giant Sword', 'Shield'],
  language: 'Common Tongue'
})

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: ['Bow', 'Dagger'],
  language: 'Elvish'
})

console.log(mage.createdAt) // Today's date
console.log(archer.dimensions) // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints) // 15
console.log(mage.name) // Bruce
console.log(swordsman.team) // The Round Table
console.log(mage.weapons) // Staff of Shamalama
console.log(archer.language) // Elvish
console.log(archer.greet()) // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()) // Bruce took damage.
console.log(swordsman.destroy()) // Sir Mustachio was removed from the game.