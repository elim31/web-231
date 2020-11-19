/*
============================================
; Title:  lim-discussion-5.1.js
; Reference: JavaScript: The Definitive Guide textbook pg 154
; Date:  17 Nov 2020
; Modified by: Eunice Lim
; Description: Discussion 5.1 A simple JavaScript program using a keyed collection with 2 errors
;===========================================
*/
// header goes here

const header = require("../lim-header.js");

console.log(header.display("Eunice", "Lim", "Discussion 5.1") + "\n");

//start program

//An array of 5 numbers
var numbers = [1,2,3,4,5];

//I want to create another array that has the square of each number in array above
var sqNumbers = numbers.map(function(sq) {return sq * sq}; );

console.log(sqNumbers) //I want the output to be "[1, 4, 9, 16, 25]"" but it is giving me "(5) [1, 4, 9, 16, 25]" instead

//end program
