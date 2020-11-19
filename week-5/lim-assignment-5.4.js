/*
============================================
; Title:  lim-assignment-5.4.js
; Author: Professor Krasso
; Date:   17 Nov 2020
; Modified by: Eunice Lim
; Description: Exercise 5.4 Filtering/Reducing Complex Data Structures
;===========================================
*/
// header goes here

const header = require("../lim-header.js");

console.log(header.display("Eunice", "Lim", "Exercise 5.3") + "\n");

//start program

// An array of composers with 4 fields, firstName, lastName, genre and rating.
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

/*Using Map() to create new array that returns 2 elements: the
* rating and lastName from the original array of composers
*/
var filteredRatings = composers.map(function(rate) {

return {
  rating: rate.rating,
  lastName: rate.lastName
}
  })
/*Using Map() to create new array that returns 2 elements: the
* genre and lastName from the original array of composers
*/
var filteredGenres = composers.map(function(genres) {

    return {
      genre: genres.genre,
      lastName: genres.lastName

    }
      })

//The output of heading composer by rating
console.log("-- COMPOSER BY RATING --")
//Using forEach() to go through the array filteredRatings and console.log to put the desired fields.
filteredRatings.forEach(function(rate){
console.log("Rating: " + rate.rating + "\nComposer: " + rate.lastName + "\n" ) })


//The output of heading composer by genre
console.log("-- COMPOSER BY GENRE --")

//Using forEach() to go through the array filteredGenres and console.log to put the desired fields.
filteredGenres.forEach(function(genres){
console.log("Genre: " + genres.genre + "\nComposer: " + genres.lastName + "\n" ) })

//end program
