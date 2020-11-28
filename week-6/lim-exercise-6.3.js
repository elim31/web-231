/*
============================================
; Title:  lim-exercise-6.3.js
; Author: Professor Krasso
; Date:   24 Nov 2020
; Modified by: Eunice Lim
; Description: Exercise 6.2 Object Literals
;===========================================
*/
// header goes here

const header = require("../lim-header.js");

console.log(header.display("Eunice", "Lim", "Exercise 6.3") + "\n");

//start program

//Creating an object literal for a ticketing system with 3 fields
var ticket = {
  id: 101,
  name: 'Help Desk Support',
  requestor: 'Bob Jones',
};

//output of {id: 101, name: Help Desk Support, requester: Bob Jones} in a single string
  console.log(ticket)

  //end program

