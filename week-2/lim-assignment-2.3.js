/*
============================================
; Title:  lim-assignment-2.3.js
; Author: Professor Krasso
; Date:   28 Oct 2020
; Modified By: Eunice Lim
; Description: Calling and defining function properties
;===========================================
*/


//header goes here
const header = require('../lim-header.js');

console.log(header.display("Eunice", "Lim", "Exercise 2.3"));

//start program

/**
 * Params: none
 * Response: function property value
 * Description: returns the value assigned to a function property
 */
function myName() {
  return myName.eunice;
  }

  /**
 * Params: none
 * Response: function property value
 * Description: returns the value assigned to a function property
 */
function myLastName() {
  return myLastName.lim;
}

// function property definitions
myName.eunice = "Eunice";
myLastName.lim = "Lim";

// output
console.log('\n')
console.log("Hello " + myName() + " "  + myLastName() + "!");

//end program
