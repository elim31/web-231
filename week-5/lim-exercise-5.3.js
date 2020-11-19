/*
============================================
; Title:  lim-exercise-5.3.js
; Author: Professor Krasso
; Date:   17 Nov 2020
; Modified by: Eunice Lim
; Description: Exercise 5.3 Object Collections
;===========================================
*/
// header goes here

const header = require("../lim-header.js");

console.log(header.display("Eunice", "Lim", "Exercise 5.3") + "\n");

//start program

//An array of 5 composers with 4 fields; firstName, lastName, genre and rating(between 1 - 10)
var composers = [
{
  firstName: 'Ludwig van',
  lastName: 'Beethoven',
  genre: 'Classical',
  rating: 8
},
{
  firstName: 'Wolfgang Amadeus',
  lastName: 'Mozart',
  genre: 'Classical',
  rating: 10
},
{
  firstName: 'Johann Sebastian',
  lastName: 'Bach',
  genre: 'Classical',
  rating: 9
},
{
  firstName: 'Joseph',
  lastName: 'Haydn',
  genre: 'Classical',
  rating: 6
},
{
  firstName: 'Franz',
  lastName: 'Schubert',
  genre: 'Classical',
  rating: 5
}
];

//Using forEach() to iterate over the array and output the results
composers.forEach(function(composer){
  console.log("Last name: " + composer.lastName + ", " + "Genre: " +  composer.genre + ", " + "Rating: " + composer.rating);
})
//end program
