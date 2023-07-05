//  Functions are block of code 
//  By calling the name of function we can execute the 
//  block of code, as many as we want.

//  Argument is the input we give into the function
//  To perform certain tasks.

function functionName(parameter){
    console.log(parameter);
}


//  If function has parameters mentiond and 
//  we didn't pass means that will take default -- undefined value


functionName("Hello Crafterers");
functionName()
functionName(3);
//  here 3 is know as argument.

functionName(null);
//  here NULL is know as argument.

//  parameter   ---> Placeholder
//  arugument   ---> Actual Value passed.


//  We can also return a value from function as return statement.
//  value can be another function, array, object, anything.

function addition(number1, number2){
    const sum = number1 + number2;
    return sum;
}

addition(13, 15);

//  Doen't printing right.
//  We can direct print function or assign it to an another var

const sum = addition(10, 20);
console.log("\n"+ sum);
//prints on next line.

console.log(addition(13, 15));



//  Global scope and Block Scope
//  Scope refers to the visibility of variables.
//  Vars defined outside function or block will have Global scope

//  Vars careted without let and const are also scoped to Global automatically.
//  let and const are scope specific.

/*This can create unintended consequences elsewhere
 in your code or when running a function again. 
 You should always declare your variables 
 with let or const.
*/

// Let's get hands dirt in that

function subtraction(number1, number2){
    const remaining = number1 - number2;
    console.log(remaining);
}

subtraction(10, 3);         // Prints 7
console.log(remaining);     //Throws Error
/*/workspace/JavaScript_Learaning/tempCodeRunnerFile.js:7
console.log(remaining);
            ^

ReferenceError: remaining is not defined
*/


//  A var with same name in Global a& also in Local scope also.
const product = 1;
function multiplication(number1, number2){
    const product = number1 * number2;
    console.log(product);
}

//  Yes, you observed correct,
//  Local value gets prefrence in conflict time
multiplication(10, 3);         // Prints 30
console.log(product);



function divide(number1, number2){
    return number1 / number2;
    console.log("Remainder is:" + number1 % number2);
}

console.log(divide(13,5));
// Have you, seen 
//  console.log("Remainder is:" + number1 % number2);
//  this is is not get executed, Because
//  When a return statement is reached, 
//  the execution of the current function stops,
//  and control returns to the calling location.

