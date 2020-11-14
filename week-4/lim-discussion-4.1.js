/*
============================================
; Title:  lim-discussion-4.1.js
; Date:   10 Nov 2020
; Author: Eunice Lim
; Description: Discussion 4.1 Arrays
;===========================================
*/
// header goes here

const header = require("../lim-header.js");

console.log(header.display("Eunice", "Lim", "Discussion 4.1"));

//start program

// starting a new array with a.length 4, no elements
var a = new Array(4);

//adding elements to array
a[1] = "Hello";
a[2] = "World";
a[3] = "Goodbye";
a[4] = 2020;

console.log(a.join()) //want output to be "Hello World Goodbye 2020"

