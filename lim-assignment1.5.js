/*
============================================
; Title: Assignment 1.5
; Author: Eunice Lim
; Date: 21 Oct 2020
; Description: Assignment 1.5 Types, Values and Variables
;===========================================
*/ 

const firstNameA = "Aurora";
const firstNameB = "Bernice";
const firstNameC = "Camille";

const lastNameA = "Anderson";
const lastNameB = "Benson";
const lastNameC = "Carson";

var addressA = "123 A Street";
var addressB = "456 B Street";
var addressC = "789 C Street";
 
var payRateA = 20.123;
var payRateB = 21.456;
var payRateC = 22.789;

var hireDateA = new Date(2015, 0, 1);
var hireDateB = new Date(2015, 1, 1);
var hireDateC = new Date(2015, 2, 1);
 
console.log(firstNameA + ' ' + lastNameA)
console.log(addressA)
console.log('$' + payRateA.toFixed(1))
console.log(hireDateA.toLocaleDateString() + '\n')

console.log(firstNameB + ' ' + lastNameB)
console.log(addressB)
console.log('$'+ payRateB.toFixed(1))
console.log(hireDateB.toLocaleDateString() +'\n')

console.log(firstNameC + ' ' + lastNameC)
console.log(addressC)
console.log('$'+ payRateC.toFixed(1))
console.log(hireDateC.toLocaleDateString() +'\n')