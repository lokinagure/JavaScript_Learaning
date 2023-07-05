//  Loop: 
//  Sometimes we need to run a specific block of code again and 
//  again, unless some condition has not meet.

//  We can run the same code multiple times by using a loop.

const arrayOne = [];
let i = 0;

//  Suppose I want to add 5 elements into array one by one
//  I can use push() for this for 5 times.
//  But using Loop feature, I can do this with using one push() Only

while(i < 5){
    arrayOne.push(i*2);
    i++;
}

console.log(arrayOne);

//  While(this is condition met true){
//   run this code.
//  }

//  there i++ ----> acts as an updater 
//  Without using updater the loop will run infinetely the same code.


//  FOR LOOP:


/*
for(initialiser; condition; updater){

}
*/

//  this is more considerabale when we know how many 
//  times we need to run loop.

const arrayTwo = [];

for(let i = 0; i < 5; i++){
    arrayTwo.push(i);
}

console.log(arrayTwo);

//  We can the initialiser or condition or updater
//  according the need.

//  Using for loop to print the even number from 0-10:

for(let i = 0; i<= 10; i = i + 2){
    console.log(i);
}


//For ODD numbers
console.log();
for(let i = 1; i<= 10; i = i + 2){
    console.log(i);
}


//  Back travering an array
//  We have alareday array named arrayOne, Let's do it.

console.log();
for(let i = arrayOne.length - 1; i >= 0; i--){
    console.log(arrayOne[i]);
}

//  We can nest one loop inside other like nested if else or array
console.log();
const arr = [
    [1, 2], [3, 4], [5, 6]
  ];
  
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
  
//  DO While Loop
//  Only change is first it will execute the condition met or not 
//  It will execute.


//  ParseInt(): function parses a string and returns an integer. 
//  Here's an example:

const a = parseInt("0023f23");
console.log(a);     //23
//  parse untill the another typed Literal comes.



