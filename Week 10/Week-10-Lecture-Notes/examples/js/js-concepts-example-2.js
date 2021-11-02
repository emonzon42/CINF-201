// This is a single line comment, use two forward slashes for it
/* 
This is a multi-line comment
It starts with a forward slash followed by an asterisk 
You always have to close your multi-line comments with an asterisk followed by a forward slash
*/

/* JavaScript uses variables which are essentially containers that hold values, you create one with the keyword var.
Variables can be named whatever you like but they must start with a letter, underscore, or a '$' in the case of JQuery */
var x; // Here we are DECLARING a variable called x, it has no value yet.
var x = 5; // We are now ASSIGNING a value of 5 to the variable x
var x = 6; // We are assigning a new value to x

// There are many data types in JavaScript but the 3 most basic ones are string, number, and boolean
var a = "This is a string"; // Strings are made of text placed between quotation marks
var b = 26; // Numbers can be whole or include decimal values
var c = true; // Booleans are either true or false and are good for testing conditions

// JavaScript utilizes a number of operators 
var num1 = 3; // The '=' in this statement is an assignment operator...whatever value is on the right is assigned to the variable on the left
var num2 = 4;
var num3 = 5;

var num4 = num1 + num2; // '+' can be used as an addition operator (7)
var num5 = num4 - num3; // '-' is used for subtraction (2)
var num6 = num5 * num1; // '*' is used for multiplication (6)
var num7 = num6 / num2; // '/' is used for division (1.5)
var num8 = num4 % num5; // '%' is used for the remainder after division is performed (1)

console.log(num1, num2, num3, num4, num5, num6, num7, num8); // Outputs all of our numbers to the console...press F12 to view them

// NOTE: The '+' symbol is also used for concatenation...this is when you combine strings together
var firstName = "Chris";
var lastName = "Velez";
var fullName = firstName + " " + lastName; // JavaScript doesn't add spaces so we do with concatenation
console.log(fullName);
// If you try to add a number and a string, JavaScript will treat the number as a string

/* 
There are a lot of other operators, the ones listed below are used for comparison:
> - greater than
< - less than
>= - greater than or equal to
<= - less than or equal to
== - equal to
=== - equal value and equal type (strict comparison)
!= - not equal to
!== - not equal value or not equal type

The ones listed below are logical operators:
&& - and - this means both items must be true
|| - or - this means either item can be true
! = not
*/

/* 
Conditional statements are used to determine what piece of code should be run
You can use only ONE if or else statement in each if/else code block
else if can be used as many times as you'd like but an else must come after the last one
*/
var firstNum = 4;
var secondNum = 3;
if(firstNum == secondNum) {
    console.log("The numbers are equal.");
} else if (firstNum > secondNum) {
    console.log("The first number is bigger.");
} else {
    console.log("The second number is bigger.");
}

// Loops are used to repeat a piece of code so you don't have to type it multiple times
// The two major loops are for and while
var counter = 1; // Initialize our loop aka where does it begin
while(counter < 11) { // This is our loop condition
    console.log(counter);
    counter++; // Same as writing counter = counter + 1; This increments our number and is run last
}

for(var counter = 1; counter < 11; counter++) { // All 3 key components are inside the parenthesis
    console.log(counter);
}

// The major difference between loops is where the initilization, loop condition, and final expression are placed. In a for loop, all 3 parts are inside of the parenthesis. In a while loop, the initializer is placed before the loop. In both cases, you need to make sure there's a way/condition that will help your loop end. Otherwise, the loop will continue forever and cause the browser to crash.

// Functions are reusable blocks of code. To use a function, you have to call it. Functions can take in arguments to use and also return a value as well. 
var add = function(a, b) { // Our two arguments are 'a' and 'b'
    return a + b; // We return the sum of a and b
}

// To call a function, you can just write it out with arguments placed in it like below
add(4, 5);
// We can log the result to the console because there is a return statement
console.log(add(4, 5));

// Objects in JavaScript are powerful items that have properties and abilities that we can call
// In our example below, we have created a person object 
var person = {
    name: "Chris",
    age: 26,
    talk: function() {alert("Hi there!");}
}

console.log(person.name);
console.log(person.age);
// person.talk(); // Calls our function, remove the forward slashes to see the alert

// To access the properties of an object, we use 'dot notation' similarly to how we would say console.log()

// Arrays in JavaScript are essentially lists that hold many values
// To create an array, use square brackets followed by a list of comma-separated items
var animals = ["cow", "chicken", "horse", "duck", "cat"];

animals[0]; // This refers to the first item...as long as whatever is in the square brackets evaluates to some numerical value, it is okay
var animalsLength = animals.length; // We use the length method on the array to get its length
console.log(animals[animalsLength - 1]); // This refers to the last item in an array of an unknown size

animals.push("dog"); // Push a value to the end of our array
animals.push("pig");
console.log(animals); // Logs all 7 array values

animals.pop(); // Removes a value from the end of our array
console.log(animals); // Logs only 6 values since we removed a value in the previous line

// You can also loop through an array and output the items to a page
var animalList = document.getElementById("animalsList"); // Get the HTML area we want our content to be in
animalsLength = animals.length; // Get the length of the array again since it changed
for(var x = 0; x < animalsLength; x++) { // Loop through our array based on its length
    animalList.innerHTML += "<li>" + animals[x] + "</li>"; // Use innerHTML to output our array
}
animalList.style.background = "black"; // You can change the style of an element with the style.property syntax
animalList.style.color = "white";

// You can get user input in the form of a popup box, uncomment the next two lines to see the prompt in action
// var answer = prompt("What is your name?");
// console.log(answer);

// You can also get user input from a form. In the example below, we will get the users' input AFTER they have clicked our button. If we retrieve the value before anything occurs, we will end up with an undefined or empty value.
document.getElementById("submitName").onclick = function() {
    var fullName = document.getElementById("fullName").value;
    alert(fullName);
}

/* 
The 2 functions below are equivalent to the function above. The first one creates a variable with the button and then adds an onclick function to it.
The second one adds an event handler to the button

var btn = document.getElementById("submitName");
btn.onclick = function() {
    var fullName = document.getElementById("fullName").value;
    alert(fullName);
}

var btn = document.getElementById("submitName");
var alertName = function() {
    alert(document.getElementById("fullName").value);
}
btn.addEventListener('click', alertName);

*/

// Below is an example of a keyup event listener
var charInput = document.getElementById("charCounter"); // Get our input box
var charCount = document.getElementById("charCount"); // Get the div we output results to
var charCounter = function() { // Create a function to use for our event listener
    var messageLength = charInput.value.length; // Get the length of the user input
    charCount.innerHTML = "You have typed " + messageLength + " characters."; // Output our message
}
charInput.addEventListener('keyup', charCounter); // addEventListener takes 2 arguments: the event to listen for, and the function to call when that event is triggered

// Producing output to the page is fairly easy
document.write("blah"); // If this is done after the document is fully loaded, it will delete everything
console.log("blah"); // Logs "blah" to the console, this is good for testing purposes.
document.getElementById("blahHolder").innerHTML = "blah"; // Deletes all HTML inside of an element with an id of "blahHolder" and replaces it with "blah"
// If you want to keep the content inside of your element, you would use 'innerHTML +=' instead of just 'innerHTML ='
