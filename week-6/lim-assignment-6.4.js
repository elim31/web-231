/*
============================================
; Title:  lim-assignment-6.4.js
; Author: Professor Krasso
; Date:   25 Nov 2020
; Modified by: Eunice Lim
; Description: Assignment 6.4 Nested Object Literals
;===========================================
*/
// header goes here

const header = require("../lim-header.js");

console.log(header.display("Eunice", "Lim", "Assignment 6.4") + "\n");

//start program

//Create an object literal with nested object literal
var ticket = {  //this is my object literal with 4 fields
  id: 105,
  name: "Turkey Tom",
  dateCreated: new Date().toLocaleDateString('en-US'),
  priority: "Low",

  person: {    //this is my nested object literal with it's own 4 fields.
    id: 100,
    firstName: "Bob",
    lastName: "Jones",
    jobTitle: "Programmer I",
  },
};
//output to match 'Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).'
console.log(
  "Ticket " +
    ticket.id +
    " was created on " + ticket.dateCreated +  " and assigned to employee " +   ticket.person.firstName +    " " +    ticket.person.lastName +    " (" +    ticket.person.jobTitle +
    ")" +
    "."
);

//end program
