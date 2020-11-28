/*
============================================
; Title:  lim-exercise-6.2.js
; Author: Professor Krasso
; Date:   24 Nov 2020
; Modified by: Eunice Lim
; Description: Exercise 6.2 Exception Handling
;===========================================
*/
// header goes here

const header = require("../lim-header.js");

console.log(header.display("Eunice", "Lim", "Exercise 6.2") + "\n");

//start program

try {   //try statement

  var x = 0;

  var y = 1;

  var sum = x + 1;

if (sum !== 0) throw ("I want zero!");  //if result of sum is not zero, then the error message will show

  console.log(sum);

} catch (err) {   //this line will execute only if there is a throw, the exception(error), and prints it

  console.log("Catch clause: " + err);

} finally { //regardless of what happens above, the finally statement wil execute

  console.log("Finally clause reached ...");

}

//end program
