/*
============================================
; Title:  lim-exercise-4.3.js
; Author: Professor Krasso
; Date:   10 Nov 2020
; Modified by: Eunice Lim
; Description: Exercise 4.3 Filtering
;===========================================
*/
// header goes here

const header = require("../lim-header.js");

console.log(header.display("Eunice", "Lim", "Exercise 4.3") + "\n");

//start program

//creating a string array of 5 vehicles

var vehicles = ["Car", "Motorcycle", "Airplane", "Bus", "Truck"];

//function named getValue with 2 parameters: an array and a string value
function getValue(arr, val) {
  for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val)   //testing to see if the value matches that in the array
      console.log(arr[i]); //output if they match
  }
}

//1st Output to display array items
console.log("-- DISPLAYING ARRAY ITEMS -- ");
for (var v = 0; v < vehicles.length; v++) { //looping through the elements in array
  console.log(vehicles[v]); //display array elements
}

//new line
console.log("");

//2nd output of select value
console.log("-- SELECTED VALUE --");
getValue(vehicles, "Motorcycle");

//new line
console.log("");

//3rd output of select value
console.log("-- SELECTED VALUE --");
getValue(vehicles, "Bus");

//end program
