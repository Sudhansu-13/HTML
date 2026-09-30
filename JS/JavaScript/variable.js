// JavaScript

/* JavaScript is a dynamically typed programming language 
*/

let number=10;
// variable declaration:

// var
//all the variabled declared with var can be recreate and reassiged
var luclyNumber=777;
console.log(luclyNumber);

//recreated
var luclyNumber=555;
console.log(luclyNumber);

//reassigned
luclyNumber=111;
console.log(luclyNumber);

//let- block scope
//can be reassign but cannot be recreated
let fruit="Apple"
console.log("Variable Declaration with let");
console.log("Fruit",fruit);

//reassign
fruit="Orange"
console.log("Fruit Reassignment",fruit);

//const
//cannot reaasign and recreate
const pi=3.14;
console.log("variable decleration with const");
console.log("Pi",pi);
// pi=22/7; - cannot be reassigned
// const pi= 3.1428; - cannot be redeclared.