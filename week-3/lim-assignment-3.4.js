/*
============================================
; Title:  lim-assignment-3.4.js
; Author: Professor Krasso
; Date:   4 Nov 2020
; Modified by: Eunice Lim
; Description: Loops
;===========================================
*/
// header goes here

const header = require("../lim-header.js");

console.log(header.display("Eunice", "Lim", "Assignment 3.4"));

//start program

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}
//variables
var x = 6;

//functions
function match(arg1, arg2) {
  if (arg1 == arg2) return true;
  else return false;
}
function logMismatch(arg1, arg2) {
  console.log(arg1 + " does not match " + arg2 + "!");
}
function logMatch(arg1, arg2) {
  console.log(arg1 + " does match " + arg2 + "!");
}

//output
console.log("\n");
console.log("-- DO THE NUMBERS MATCH GAME --");

//for loop with 10 iterations
for (var y = 0; y < 10; y++) {
  y = randomNumber();
  if (match(x, y)) {
    logMatch(x, y);
  } else {
    logMismatch(x, y);
  }
}
//end program
