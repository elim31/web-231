/*
============================================
; Title:  lim-discussion-6.1.js
; Date:   24 Nov 2020
; Author: Eunice Lim
; Description: Discussion 6.1 Objects and Built-In Objects
;===========================================
*/
// header goes here

const header = require("../lim-header.js");

console.log(header.display("Eunice", "Lim", "Discussion 6.1"));

//start program

//I am creating an object named holiday. It has 4 fields.
var holiday = {
    nameOfHoliday= "Thanksgiving",
    dateOfHoliday= "27 November 2020",
    dayOf= "Thursday",
    food= "Turkey",
    };

/*My output should show:
--- What holiday is it? ---
*Thanksgiving is always on a Thursday.
*The Turkey is eaten on Thanksgiving.
*This year's Thanksgiving falls on 27 November 2020.
*Happy Thanksgiving Everyone!
*/
    console.log("---What holiday is it?---")
    console.log(holiday.nameOfHoliday + " is always on a " + holiday.dayOf + ".")
    console.log("The " + holiday.food + " is eaten on " + holiday[nameOfHoliday] + ".")
    console.log("This year's " + holiday["nameOfHoliday"] + " falls on " + holiday.dateOfHoliday + ".")
    console.log("Happy " + holiday.nameOfHoliday + " Everyone!")

    //end program
