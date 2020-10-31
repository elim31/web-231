/*
============================================
; Title:  lim-assignment-2.4.js
; Author: Professor Krasso
; Date:   28 Oct 2020
; Modified by: Eunice Lim
; Description: Building and Invoking functions
;===========================================
*/
// header goes here

const header = require('../lim-header.js');

console.log(header.display("Eunice", "Lim", "Exercise 2.4"));

//start program

/**
 * Params: firstName, lastName
 * Response: firstName + lastName
 * Description: returns firstName and lastName as one string
 */
function fullName(firstName, lastName){
  return firstName + lastName;
}

/**
 * Params: year, month, day
 * Response: new date
 * Description: returns new date
 */
function dateWriter(year, month, day){
  return new Date(year, month-1, day).toLocaleDateString();
}

/**
 * Params: number, numOfFixedPositions
 * Response: number with fixed positions
 * Description: returns the number with the number of fixed positions
 */

function formatNumber(number, numOfFixedPositions){
  return number.toFixed(numOfFixedPositions);
}

/**
 * Params: one string parameter
 * Response: parse value as an integer
 * Description: return the value as an integer
 */
function convertToInt(age){
return parseInt(age);
}

/**
 * Params: one string parameter
 * Response: parse value as a float
 * Description: return the value as a float
 */
function convertToFloat(dollar){
  return parseFloat(dollar);

}
//function property definitions
 let n = 48.821378;
 let p = 2;
 let firstName = "Eunice";
 let lastName = "Lim";
 let age = 32;
 let dollar = 40000.00


// output
console.log('\n')
console.log('Hello my name is ' + firstName + ' ' + lastName + '!')
console.log('Today\'s date is ' + dateWriter(2020, 10, 28) + ' and the current temperature is ' + formatNumber(n,p) + ' degrees' + '.')
console.log('I am ' + age + ' years old and my savings account goal is ' + dollar + ' dollars')

//end program
