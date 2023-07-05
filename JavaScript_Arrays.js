const sandwich = ["Bread", "Sabji", "Mayonees", "Chutney", "Sos", "Bread"];
console.log(sandwich);

//  Array Can store dublicate value also but theie indices will be different
//  Array index -- Starts from Zero
//  We can get access to length of an array from
//  arrayVarName.length method

console.log(sandwich.length);


//  Like nested If else 
//  One if statement inside another 
//  We can store one array inside another also.
// And via their uniuqe index values we can get access those

const teams = [["Panthers", 23], ["Bulls", 42]];

console.log(teams[0][0]);
// gives output as Panthers;

console.log(teams[1][1]);
// gives output as 42;

// We can update/change the value of array with using 
//  the index of those values

teams[1][0] = "Strikers";
console.log(teams);

// NOTE: There shouldn't be any spaces between the array name 
//  and the square brackets, like array [0]. 
//  Although JavaScript is able to process this correctly, 
//  this may confuse other programmers reading your code.


const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  const subarray = arr[3];
  const nestedSubarray = arr[3][0];
  const element = arr[3][0][1];     //11



//  Array Manipulation.

//  An easy way to append data to the end of an array 
//  is via the push() function.

const arrayOne = [1, 2, 3, 4];
arrayOne.push("Five");

console.log(arrayOne);

// We can insert another array also via push method

arrayOne.push(["Six", 6]);
console.log(arrayOne);


//  .pop() is used to pop a value off of the end of an array.
//   We can store this popped off value by assigning it to a
//   variable. In other words,
//   .pop() 
//  removes the last element from an array and returns that element.

//  arrayOne.pop();
//  Returns the pooped element 
//  If we need to get the what are popped elemets
//  We can assign some varibale to store pooped or display that

console.log(arrayOne.pop());
console.log(arrayOne.pop); //It Will remove any elemet guess why? & What is displyaed messsage

//  push    --> Insert element at Lat
//  pop     --> Removes element from Last

//  What If we want to remove element from beginning or
//  want to add element at first

//Don't worry
// shift()      --> removes the element at first indexd
// unshift()    --> Add the elements at first index 
//  other values will get promoted to next indeices.

const ourArray = ["Stimpson", "J", "cat"];
console.log();
console.log(ourArray);

ourArray.shift();
console.log(ourArray);

ourArray.unshift("Happy");
console.log(ourArray);


