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
  * `grade` receives a `student` object and a `subject` string as arguments and returns '${<student name>} receives a perfect score on ${subject}'.
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
}

const josh = new Instructors({
  name: 'Josh',
  age: 37,
  location: 'Utah',
  gender: 'Male',
  specialty: 'Front-end',
  favLanguage: 'Javascript',
  catchPhrase: `Keep coding`
})

console.log(josh.age)
console.log(josh.speak())
console.log(josh.demo('HTML'))
console.log(josh.grade({ name: 'Divya' }, 'React.js'))

/*
3. Students
* Student uses the same attributes that have been set up by Person.
* Student has the following unique props:
  * `previousBackground`, i.e. what the Student used to do before Lambda School
  * `className`, i.e. CS132.
  * `favSubjects`, i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript'].
* Student has the following methods:
  * `listSubjects`: a method that returns all of the student's favoriteSubjects one-by-one.
  * `PRAssignment`: a method that receives a subject as an argument and returns `${student.name} has submitted a PR for ${subject}`.
  * `sprintChallenge` similar to PRAssignment but returns `${student.name} has begun sprint challenge on ${subject}`.
*/

// class Students extends Person {
//   constructor(student) {
//     super(student)
//     this.previousBackground = student.previousBackground
//     this.className = student.className
//     this.favSubjects = student.favSubjects
//   }
//   listSubjects() {
//     this.favSubjects.forEach(subject => subject)
//   }
//   PRAssignment(subject) {
//       return `${student.name} has submitted a PR for ${this.subject}.`
//   }
// }

/*
4. Program Managers
* ProjectManagers are extensions of Instructors.
* ProjectManagers have the following unique props:
  * `gradClassName`, i.e. CS1.
  * `favInstructor`, i.e. Sean.
* ProjectManagers have the following Methods:
  * `standUp`: a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode`: a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`.
*/
