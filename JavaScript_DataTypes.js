//There are 8 types of data types are there

//1. undefined
//2. null
//3. string
//4. number
//5. boolean
//6. symbol
//7. object
//8. bigint

//var varName;  declaration
var myVariable;


//variable initialisation   
// = is assignment operator 
//assigns right value to the left side variable
myVariable = 5;


var myNum;
myNum = myVariable;
//  myNum is have value of myVarible i.e  5;

//Declaration and initialisation in same line it's commmon and more redable
var myVar = 0;


//  Now it's tome to String
var myName = "lokinagure";
//whatever written in " " is string literal

//  Undefined
//  Whenver we declared variable and not initialised to any value it's a type of Undefined
//  And If I perform Mathamatical operation with undefined answer we get is   : NaN
//  And If I perform String operation with undefined answer we get is   : undefined
var unValue;
//console.log(unValue)

console.log()
//console.log(unValue + 50);

console.log()
//console.log("Hello" + unValue );

//  In Javascript variable are case sensitive
//  both are completely different
var thisVarible = 30;
var ThisVariable = "Thirty";

//  The let keyword
var camper = "James";
var camper = "Boss";
//  What the hellll, The same varible I'm declaring more then once
// Is it feature or Bug bro? 
// Emotional Damage;

//  For some big projeccts maybe it becomes problem so let's intoduce let keywors
let champion = "Bravo";
//let champion = "Me";
//  getting error Can't declare block scoped varible 
//  So problem solved with ES6 feature let
//  Failure management


var thisIsString = "Boss";
var thisIsString = 8055;
//  It's get confusion when you made both thses changes at different places
//  So here lwt comes to help, We can;t declare a same scoped variable more then once

//  Read Only Varible
//  Declare and Initialise onece, use anytime

//The Const keyword
const MY_NAME = "lokinagure";
//  for const value we use a denotion of capital letters so we get idea of this is 
//  constant variable 

//  You should always name variables you don't want to reassign using 
//  the const keyword. This helps when you accidentally attempt to 
//  reassign a variable that is meant to stay constant.

//  Adding two numbers
const myValue = 5 + 50;
//  myValue is 55.
//console.log(myValue);

//Subtraction
 const remainig = 50 - 30;
 //console.log(remainig);


//  Multiply
const product = 10 * 40;
console.log(product);

// Dividing
const division = 16 / 2;
console.log(division);

// Increment and Decremet

//  Incremt 
//  value++;
// i.e equals to value
//  value = value + 1;
//  Same goes with decrement

const onePointTwo = 1.2;
const twoPointThree = 2.3;
console.log(onePointTwo + twoPointThree) ;
//  1.2 + 2.3  => 3.5


const reminder = 9.5 % 4.0;
console.log(reminder);
//  4 diving 9 gives reminder one 1;


//  Is number Odd or Even
//  we can easily get that by using remainder operator
//  when divide by zero : If remainder is 0 -> even else Odd



//   Augmented Addition
let oneVar = 5;
oneVar += 10;
console.log(oneVar);
//  oneVar is 15 now

// Augmented Subtraction
oneVar -= 3;
console.log(oneVar);
// oneVar is 12 now

//Same goes with *= multiplication and also /= division also

