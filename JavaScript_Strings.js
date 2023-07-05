//  Let's escape in Javascript
console.log("\"Hello World\"");
//  We can escape " ", ' 
//  by adding \ Backslash infront of what we want 
//  to escape from normal use case.

//  End with the style where you've started
//  It's either single or double 
//  I'm talking about auotes.

//  let's look out.
const message = 'You\'ve to do it now';
const Message = "You\'ve to do it now";

const text = 'Jake asking You, "Hey lets go to Adventure? "';
console.log(message);
console.log(Message);
console.log(text);
//  The reason why you might want to use one type of quote over the other 
//  is if you want to use both in a string. 
//  This might happen if you want to save a conversation in a string 
//  and have the conversation in quotes. 

//  Another use for it would be saving an <a> tag with various
//   attributes in quotes, all within a string.

// More about escape .. Now.
// single quote    = \'
// double quote    = \"
// backslash       = \\
// newline         = \\n
// tab             = \t
// carriage return = \r
// word boundry    = \b
// form feed       = \f

//  String concatination
//  In JavaScript, when the + operator is used with a String value,
//   it is called the concatenation operator. 
//  You can build a new string out of other strings by concatenating them 
//  together.

//  const ourStr = "I come first. " + "I come second.";
let ourStr = "I come first. ";
ourStr += "I come second.";

console.log(ourStr);

//  Constructing Strings with Variables
const myName = "lokinagure";
const resString = "Hello folks, \n" + "my name is "+ myName + ". How you doing ?"
console.log(resString);

//  LENGTH OF STRING
//  varname.length() methos gives the length of string
//  It will work on string literal also
console.log(resString.length);


//  Strings are immutable
//  oh, What??
//  Yes you hread it right?
//  Let's look.
let myString = "Bob";

//  I want to change the first letter of string
myString[0] = "J";
console.log(myString); // gives output as Bob only

//  this does not mean that myString could not be re-assigned.
//  The only way to change myString would be to assign it with a new value
myString = "Job";
console.log(myString);