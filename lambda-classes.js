/*
 * Instructors - extensions of Person
 * Students - extensions of Person
 * Project Managers - extensions of Instructors
 */

/*
1. Person
* Person receives `name` ,`age`, `location`, `gender` as props.
* Person receives `speak` as a method, which returns `Hello, my name is ${name}. I'm from ${location}.`, where `name` and `location` are the object's own props.
*/

class Person {
  constructor(person) {
    this.name = person.name
    this.age = person.age
    this.location = person.location
    this.gender = person.gender
  }
  speak() {
    return `Hello, my name is ${this.name}. I'm from ${this.location}.`
  }
}

/*
2. Instructors
* Instructor uses the same attributes that have been set up by Person.
* Instructor has the following unique props:
  * `specialty`: what the Instructor is good at i.e. 'redux'
  * `favLanguage`, i.e. 'JavaScript, Python, Elm, etc.'
  * `catchPhrase`, i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and returns 'Today, we're learning ${subject}', where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and returns '${<student-name>} receives a perfect score on ${subject}'.
*/

class Instructors extends Person {
  constructor(instructor) {
    super(instructor)
    this.specialty = instructor.specialty
    this.favLanguage = instructor.favLanguage
    this.catchPhrase = instructor.catchPhrase
  }
  demo(subject) {
    return `Today, we're learning ${subject}.`
  }
  grade(student, subject) {
    const { name } = student
    return `${name} receives a perfect score on ${subject}.`
  }
  // STRETCH
  addSub(min = -10, max = 10, student) {
    // add or subtract 10 points
    min = Math.ceil(min)
    max = Math.floor(max)
    // both min and max are inclusive
    student.grade += Math.floor(Math.random() * (max - min + 1)) + min
    return student.grade
  }
}

const josh = new Instructors({
  name: 'Josh',
  age: 37,
  location: 'Utah',
  gender: 'Male',
  specialty: 'Front-end',
  favLanguage: 'Javascript',
  catchPhrase: `Coding is dope!`
})

console.log(josh.name)
console.log(josh.catchPhrase)
console.log(josh.speak())
console.log(josh.demo('Java'))
console.log(josh.grade({ name: 'Divya' }, 'React.js'))

/*
3. Students
* Student uses the same attributes that have been set up by Person.
* Student has the following unique props:
  * `previousBackground`, i.e. what the Student used to do before Lambda School
  * `className`, i.e. CS132.
  * `favSubjects`, i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript'].
* Student has the following methods:
  * `listSubjects`: a method that logs out all of the student's favoriteSubjects one-by-one.
  * `PRAssignment`: a method that receives a subject as an argument and returns `${name} has submitted a PR for ${subject}`.
  * `sprintChallenge` similar to PRAssignment but returns `${name} has begun sprint challenge on ${subject}`.
*/

class Students extends Person {
  constructor(student) {
    super(student)
    this.previousBackground = student.previousBackground
    this.className = student.className
    this.favSubjects = student.favSubjects
    this.grade = student.grade
  }
  listSubjects() {
    console.log(`${this.name}'s favorite subjects are:`)
    this.favSubjects.forEach(subject => console.log(`${subject}`))
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`
  }
  graduate(instructor) {
    let attempts = 0
    while (this.grade < 70 && attempts < 10) {
      console.log(
        `${this.name}'s new grade: ${instructor.addSub(-10, 10, this)}`
      )
      attempts++
    }
    return this.grade >= 70
      ? `Congrats, ${this.name}! You graduated :)`
      : `${this.name}, keep studying!`
  }
}

const divya = new Students({
  name: 'Divya',
  age: 24,
  location: 'Oakland',
  gender: 'Female',
  previousBackground: 'Data Science',
  className: 'Web18',
  favSubjects: ['React.js', 'Redux.js', 'Python'],
  grade: 70
})

console.log('\n')
console.log(divya.name)
console.log(divya.previousBackground)
console.log(divya.speak())
console.log(divya.listSubjects())
console.log(divya.PRAssignment('Haskell'))
console.log(divya.sprintChallenge('Express.js'))

// STRETCH
console.log(`${divya.name}'s current grade: ${divya.grade}`)
console.log(`${divya.name}'s new grade: ${josh.addSub(-10, 10, divya)}`)
console.log(divya.graduate(josh))

/*
4. Program Managers
* ProjectManagers are extensions of Instructors.
* ProjectManagers have the following unique props:
  * `gradClassName`, i.e. CS1.
  * `favInstructor`, i.e. Sean.
* ProjectManagers have the following Methods:
  * `standUp`: a method that takes in a slack channel and returns `${name} announces to ${channel}, @channel stand-up time​​​​​!`
  * `debugCode`: a method that takes in a student object and a subject string and returns `{name} debugs {<student-name>}'s code on ${subject}`.
*/

class ProjectManagers extends Instructors {
  constructor(pm) {
    super(pm)
    this.gradClassName = pm.gradClassName
    this.favInstructor = pm.favInstructor
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @${channel} stand-up time!`
  }
  debugCode(student, subject) {
    const { name } = student
    return `${this.name} bebugs ${name}'s code on ${subject}.`
  }
}

const liz = new ProjectManagers({
  name: 'Liz',
  age: 27,
  location: 'Portland',
  gender: 'Female',
  specialty: 'Full-stack',
  favLanguage: 'Javascript',
  catchPhrase: `I love colors!`,
  gradClassName: 'Web12',
  favInstructor: 'Josh'
})

console.log('\n')
console.log(liz.name)
console.log(liz.catchPhrase)
console.log(liz.gradClassName)
console.log(liz.speak())
console.log(liz.demo('C++'))
console.log(liz.grade({ name: 'Sam' }, 'Erlang'))
console.log(liz.standUp(`web18_liz`))
console.log(liz.debugCode({ name: 'Sean' }, 'ClosureScript'))
