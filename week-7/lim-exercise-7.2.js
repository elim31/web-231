/*
============================================
; Title:  lim-exercise-7.2.js
; Author: Professor Krasso
; Date:   2 Dec 2020
; Modified by: Eunice Lim
; Description: Exercise 7.2 Constructor Functions
;===========================================
*/
// header goes here

const header = require("../lim-header.js");

console.log(header.display("Eunice", "Lim", "Exercise 7.2") + "\n");

//start program

/**
 * Params: id, firstName, lastName, title
 * Response: void
 * Description: sets the id, first name, last name and title of an object
 */
function Employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}
//creating 5 new objects
const employees = [
  new Employee('1', 'Thomas', 'Edison', 'Software Engineer'),
  new Employee('2', 'Benjamin', 'Franklin', 'Programmer'),
  new Employee('3', 'Nikola', 'Tesla', 'Project Manager'),
  new Employee('4', 'Charles', 'Babbage', 'Product Manager'),
  new Employee('5', 'Alexander','Bell', 'Business Analyst'),
];

//output using looping over the array
let index = 1
for (let i = 0; i < employees.length; i++){
  console.log(index + ' ' + employees[i].firstName + ' ' + employees[i].lastName + ' ' + employees[i].title)
  index++
}
//end program
