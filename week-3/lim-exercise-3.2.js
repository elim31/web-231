/*
============================================
; Title:  lim-assignment-3.2.js
; Author: Professor Krasso
; Date:   3 Nov 2020
; Modified by: Eunice Lim
; Description: Pattern Matching Functions
;===========================================
*/
// header goes here

const header = require("../lim-header.js");

console.log(header.display("Eunice", "Lim", "Exercise 3.2"));

//start program

/*
  Expected output:

  FirstName LastName
  Exercise 3.2
  Today's Date

  // output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/

/**
 * Params: arg1, arg2
 * Response: match true or false
 * Description: returns true if match, false if no match
 */

//variables
var testVar1 = "Truck";
var testVar2 = "Car";
var testVar3 = "Van";
var testVar4 = "Four";
var testVar5 = "Three";
var testVar6 = "Bike";

/**
 * Params: arg1, arg2
 * Response: match true or false
 * Description: returns true if match, false if no match
 */
//functions
function match(arg1, arg2) {
  if (arg1 == arg2) return true;
  else return false;
}

function logMismatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do not match!");
}
function logMatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " do match!");
}

//new line between header and output
console.log("\n");

//Output from the match() funtion
console.log(match("A", "B"));
console.log(match(5, 5));

//new line between outputs
console.log("\n");

//Conditional "if...else" statements. Includes checks for 6 test variables
if (match(testVar1, testVar2)) {
  logMatch(testVar1, testVar2);
} else {
  logMismatch(testVar1, testVar2);
}

if (match(testVar6, testVar6)) {
  logMatch(testVar6, testVar6);
} else {
  logMismatch(testVar6, testVar6);
}
if (match(testVar4, testVar5)) {
  logMatch(testVar4, testVar5);
} else {
  logMismatch(testVar4, testVar5);
}
