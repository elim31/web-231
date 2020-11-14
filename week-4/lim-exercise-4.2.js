/*
============================================
; Title:  lim-exercise-4.2.js
; Author: Professor Krasso
; Date:   10 Nov 2020
; Modified by: Eunice Lim
; Description: Exercise 4.2 Arrays
;===========================================
*/
// header goes here

const header = require("../lim-header.js");

console.log(header.display("Eunice", "Lim", "Exercise 4.2") + "\n");

//start program

//string array of 5 fruit items in no order
var fruit = ["Apple", "Banana", "Orange", "Pear", "Mango"];

//function to get fruit from array with one parameter
function getFruit(arr) {

//looping through the elements of the array
  for (var f = 0; f < arr.length; f++) {
    console.log(arr[f]); //output of results
  }
}
//Output from the getFruit() function
getFruit(fruit);

// end program
