/*
============================================
; Title:  lim-exercise-5.2.js
; Author: Professor Krasso
; Date:   17 Nov 2020
; Modified by: Eunice Lim
; Description: Exercise 5.2 ES5 Built-in Functions
;===========================================
*/
// header goes here

const header = require("../lim-header.js");

console.log(header.display("Eunice", "Lim", "Exercise 5.2") + "\n");

//start program

//A string array of 5 favorite food types
var foods = ['Oysters', 'Shrimp', 'Steak', 'Tacos','Sushi'];

//Using the forEach() function to iterate over the array
foods.forEach(function(food) {
  console.log(food);    //Outputs the results
});

//end program
