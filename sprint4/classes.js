/*
Copy and paste your prototype in here and refactor into class syntax.
Test your volume and surfaceArea methods by uncommenting the logs below:
*/

class CuboidMaker {
  constructor(dimensions) {
    this.length = dimensions.length
    this.width = dimensions.width
    this.height = dimensions.height
  }

  volume() {
    return this.length * this.width * this.height
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    )
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
})

console.log('Cuboid volume:', cuboid.volume()) // 100
console.log('Cuboid surface area:', cuboid.surfaceArea()) // 130

/* 
STRETCH

Extend the base class CuboidMaker with a subclass called CubeMaker. 
Find the formulas for volume and surface area for cubes. 
Create those methods using the dimension properties from CuboidMaker.  
Test your work by logging out your volume and surface area.
*/

class CubeMaker extends CuboidMaker {
  constructor(dim) {
    super(dim)
  }
  volume() {
    return Math.pow(this.length, 3)
  }
  surfaceArea() {
    return 6 * Math.pow(this.length, 2)
  }
}

const cube = new CubeMaker({
  length: 4
})

console.log('\nCube volume:', cube.volume())
console.log('Cube surface area:', cube.surfaceArea())
