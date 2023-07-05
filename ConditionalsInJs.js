//  First understanding boolean values
//  It's either TRUE   or FALSE
//  That's it  (not in quotes)

var isIt = true;


//  If statements used to make decisions based on situations
//  When the condition evaluates to true, 
//  the program executes the statement inside the curly braces. 
//  When the Boolean condition evaluates to false, 
//  the statement inside the curly braces will not execute.

function test(conditoin){
    if(conditoin){
        return "It's True";
    } else 
    return "It's false;"
}

console.log(test(true));
console.log(test(false));



//  There are many comparison operators in JavaScript. 
//  All of these operators return a boolean true or false value.

//1. Equality Operator
function equalityTest(value){
    if(value == 10)
    console.log(10);
    else
    console.log("Not Ten");
}

equalityTest(10);
equalityTest(20);

//  Let's make more strict comparision
//  Comparison with the Strict Equality Operator

//  If the values being compared have different types, 
//  they are considered unequal, and the strict equality operator will return false.

//  Even though values same It's return false when both types are different

      
   
console.log(3 == 3);       //TRUE
console.log(3 == '3');     //TRUE
console.log(3 === 3);      //TRUE
console.log(3 === '3');    //FALSE  3 is number type and '3' is String type

//  The inEquality Operator  !=
//  3 != 5  => True i.e 3 not euals to 5
//  3 != 3  => False i.e 3 is equals to 3


console.log(1 != false);    //True
console.log(0 != false);    //False
console.log(3 != false);    //True
console.log(3 != true);     //True

//  Closely observe 1 --> True or any number
//                  0 --> False or any number
//  It's confusing.

//  In inEquality check also we have Strict InEquality operator
//  value !== value

console.log(3 !== 3);       //FALSE
console.log(3 !== '3');     //TRUE


//  Greater then operator                   valueOne > valueTwo
//  Greater then or equals to operator      valueOne >= valueTwo
//  Less then operator                      valueOne <  valueTwo
//  Less then or equals to operator         valueOne <= valueTwo

//  Logical operatos
//  AND
//  OR


//  It's Else if
//  To check multiple conditions 

function numberCheck(num){
    if(num == 0)
console.log("Zero");
else if(num > 0)
console.log("positive");
else
console.log("negative");

}

numberCheck(-2);

//  The order of execution starts from top to bottom
//  careful of what statement comes first.

//  We can use chained (ladder) If else chain statements
//  for complex calculations or conditions

//  The Switch
//   A switch statement tests a value and 
//  can have many case statements which define 
//  various possible values. Statements are executed from 
//  the first matched case value until a break is encountered.

const lowercaseLetter = "c";

switch (lowercaseLetter) {
    case 'a':
      console.log("A");
      break;
    case 'b':
      console.log("B");
      break;
    default: console.log("Not \"a\" or nor \"b\" ");
  }
  
  //    case values are tested with strict equality (===).

  //     The break tells JavaScript to stop executing statements.
  //     If the break is omitted, the next statement will be executed.

//  In a switch statement you may not be able to specify 
//  all possible values as case statements. 
//  Instead, you can add the default statement 
//  which will be executed if no matching case statements 
//  are found. Think of it like the final else statement 
//  in an if/else chain.


// Careful with Switch use, break wherver need
/*
If the break statement is omitted from a switch statement's 
case, the following case statement(s) are executed until 
a break is encountered.
 If you have multiple inputs with the same output, 
 you can represent them in a switch statement like this:
*/
let val = 2;
let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}

console.log(result);


//  The Ternary Operator
//  Hidden IF ELSE 

console.log(    2 > 3 ? 3: 2 );
// (condition) ? if true execute this: else execute this.

//  We can use complex ternary operator like if else if ladder like also

console.log(
    (3 === '5') ? "Both are diifrent types" 
    :   (3 == '5') ? "Values also diffrent"
    :   (3 > '5') ? "First is greater then Second"
    :   "First is less then second"
);



