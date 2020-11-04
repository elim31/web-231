/*
============================================
; Title:  lim-exercise-3.3.js
; Author: Professor Krasso
; Date:   3 Nov 2020
; Modified by: Eunice Lim
; Description: Control Statements
;===========================================
*/
// header goes here

const header = require("../lim-header.js");

console.log(header.display("Eunice", "Lim", "Exercise 3.3"));

//start program

/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/

let eventKeyCode = 13;
//switch statements replaced from branch of if statements
switch (eventKeyCode) {
  case 13:
    console.log("The enter key was pressed");
    break;
  case 16:
    console.log("The shift key was pressed.");
    break;
  case 32:
    console.log("The spacebar key was pressed.");
    break;
  case 8:
    console.log("The backspace / delete key was pressed.");
    break;
  default:
    console.log("Unrecognized key.");
    break;
}
//end program
