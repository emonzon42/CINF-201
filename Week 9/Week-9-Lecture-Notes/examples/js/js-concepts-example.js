// This is a single-line comment
/* This is a 
multi-line
comment */

var myName = "Chris"; // This is a variable of the string type
var myAge = 26; // This is a variable with a type of number
var likesMustard = false; // This is a variable with a type of boolean
var identity; // This variable is declared but has no value

/* In our if, else if, else statement, we use our myAge variable above
to determine which identity we should use. Depending on which part of 
the if/else if/else statement is true, a different piece of code will be executed. 
The if and else if portions always require parenthesis and code that must
evaluate to true or false. Else executes if no other option is true. */
if(myAge < 18) {
    identity = "a teenager.";
} else if (myAge > 18 && myAge < 65) {
    identity = "an adult.";
} else {
    identity = "a senior citizen.";
}

/* We use an if/else statement here since there are only two options...
you either like mustard or you don't. To check our true/false value, we 
use double equal signs "==" because that checks for values. A single equal 
sign is the operator for assigning values. A triple equal sign (===) is used 
to check if the value AND variable type are the same. It's a more strict way
of comparing values. */
if (likesMustard == true) {
    identity += " I also like mustard...Delicious!";
} else {
    identity += " I also dislike mustard...Blech!";
}

// We use string concatenation along with console.log to output our content to the console window
// The plus sign (+) is an operator for math but also for adding strings together
console.log("My name is " + myName + " and I am " + myAge + " years old which makes me " + identity);


/* For and While Loops 
The two loops do the exact same thing overall but for different numbers.
The for loop logs 1-10 to the console and the while loop logs 11-20 to the
console as well. They are formatted a little differently but can do the same things */
for (var y = 0; y <= 10; y++) { //Initialize our number, name our condition to check, decide how much we increment
    console.log(y);
}

var z = 11; // Initialize our number
while (z <= 20) { // Name our condition to check
    console.log(z);
    z++; // decide how much to increment 
}

/* Please note that the incrementing/decrementing part is absolutely necessary. 
If you remove the y++ or z++ parts above and try to run the code. Your loop will
never end and the browser will eventually crash or go unresponsive. */


/* In the example below, we use two variables to store our button element and container 
that will be used for our results. To do so, we use the id attribute of the HTML element. 
Using document.getElementById("") allows us to grab any HTML element by its id attribute. There
are other ways to select elements but this is just one of the simplest ones.

We can then hook our JS to any HTML element at will. However, each ID should be unique and not
repeated anywhere else on the page. After the button is clicked (btn.onclick), we get the
values of the inputs. If you get the inputs before the button is clickec, they will end up
being empty or having no value. We then check the inputs to make sure they aren't empty strings or 
contain null values. If they're not empty, we tell the user about the info provided. If 
they are empty, we let the user know with innerHTML. */
var btn = document.getElementById("submit");  // This is our HTML button, we're saving it to a variable called btn
var results = document.getElementById("results"); // This is our empty results div, we will use it for output

btn.onclick = function() { // btn is our object, onclick is the event
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    
    if(name == "" || name == null || age == "" || age == null) {
        results.innerHTML = "Please provide some input!"; // Since we grabbed the results div already, we can say results.innerHTML to refer to the inside of it
    } else {
        results.innerHTML = "Your name is " + name + " and you are " + age + " years old.";
    }
}
/* It's important to note that .innerHTML will remove all preexisting HTML and replace it with whatever you add. 
If you don't want this to occur, you can use "+=" which means add this onto whatever already exists. */

// These next statements are examples of the different operators we can use in JS. Check the console to see the output.
console.log(5 / 7); // Division
console.log(5 + 7); // Addition
console.log(5 - 7); // Subtraction
console.log(5 * 7); // Multiplication
console.log(7 % 5); // Modulus - this is division but the result is the remainder after the division is performed

// We can create a function with two parameters (length and width) and then call the function right after
var myFunction = function(length, width) {
    var area = length * width;
    return area; // Use return to spit values back out
}
// We can call our function by just naming it...this will log the result of our function 
console.log(myFunction(5, 6));

/* This is how we can add event handlers to our code.
We just have to specify the item we want to affect and what event 
we want to watch for...in the example below, we are targeting
anything with an id of "newColorPara" and assigning a dblclick event
handler. So when it's double-clicked, code inside will be triggered. 

You can do this for other events such as onmouseover, onmouseout, onclick, etc.
We can refer to the object by using "this" which will refer to the thing clicked,
moused over, or whatever other action we used. */
var newColorPara = document.getElementById("newColorPara");
newColorPara.ondblclick = function() {
    this.style.color = "blue";
}


/* This is just a standalone function designed to be used on its own.
You can creat functions just by naming and calling them. This function
will simply add the two parameters we provide which are x and y. We can
output the result to the console by using console.log with the function inside. 
Of course, the function needs to have values provided or it won't have a result.'*/
function addTwoNums(x, y) {
    return x + y;
}
console.log(addTwoNums(4, 5));