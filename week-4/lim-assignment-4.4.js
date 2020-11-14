/*
============================================
; Title:  lim-assignment-4.4.js
; Author: Professor Krasso
; Date:   11 Nov 2020
; Modified by: Eunice Lim
; Description: Assignment 4.4 Predicates
;===========================================
*/
// header goes here

const header = require("../lim-header.js");

console.log(header.display("Eunice", "Lim", "Assignment 4.4") + "\n");

//start program

//A string array of 5 states
const states = ["Alabama", "Nebraska", "Iowa", "California","Nevada"];

/**
 * Params: statesArrayIndex, compareStates
 * Response: compares the two values and returns true or false
 * Description: contains the predicate
 */
function getState(statesArrayIndex, compareStates) {
    if (statesArrayIndex === compareStates) {   //This tests if the two parameters match.
    return true;                     //This is the predicate, returns true if they match.
  }   else {
    return false;                     //Returns false if they do not match
  }
}
//Calling the getState function using the built-in filter() function
let filterStates = states.filter(function(statesArrayIndex)  //statesArrayIndex refers to the elements in the states array
  {return getState(statesArrayIndex, "Iowa");})              //The second value is the one to be compared to the elements in the states array

//1st output displaying original array
console.log("-- ORIGINAL ARRAY --");
for (let index = 0; index < states.length; index++) //The loop to run through the array and display all elements.
  console.log(states[index]);

//2nd output displaying sorted array
console.log("\n-- SORTED ARRAY --");
states.sort();                                      //Using the sort() method to sort the array.
for (let index = 0; index < states.length; index++ //The loop to run through the array and display them sorted.
)
  console.log(states[index]); //To display the sorted array

//3rd output displaying selected value
console.log("\n-- SELECTED VALUE --");
for (let index = 0; index < filterStates.length; index++) { //looping through the filter method and getStates function
    console.log(filterStates[index]);                     //The result of the predicate
}
console.log < filterStates[0];                      //output of the compared value

//end program
