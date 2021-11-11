/* The first line below selects the document. 
When the document is ready, that's when our JS will be used. 
This allows the HTML to be loaded first so errors don't occur. */

$(document).ready(function () {

    // Example 1
    /* We can use the following format to handle most event handling instances.
    We would replace selector with what we are selecting and eventname with the
    event we are checking for (mouseenter, click, etc.). This is known as the 
    convenince version of event handling.
    
    $("selector").eventname(function() {
    
    });
    
    In the example below, we are selecting an element with an id of "hello"
    and assigning a click function to it. Inside of that click function,
    we have a simple alert to output "Hello!"
    */

    $("#hello").click(function () {
        alert("Hello!");
    });

    // Example 2
    /* We can also use the following format to perform the same thing as the code
    in Example 1. It's more verbose and not as convenient but allows us to add multiple 
    event handlers to an item as you'll see in Example 3 */

    $("#hello2").on("click", function () {
        alert("Hello Again!");
    });

    //Example 3 
    /* In this example, I'm using the .on method to add multiple event handlers to our button. 
    Also, I'm targeting the button by its class and not ID. This is bad practice generally as 
    we should ALWAYS use IDs to hook to our JS. However, JQuery makes it easier to do either. 
    I'll add a click and mouseleave event to trigger two different alerts. */

    $(".clicker").on({
        // First event 
        click: function () {
            alert("You clicked the button.");
        },
        // Second event
        mouseleave: function () {
            alert("Your mouse has left the button.");
        }
    });

    /* To use multiple event handlers, we type .on({}) and place each event
    inside of its own set of curly brakets, separated by commas as depicted above. */

    // Example 4 
    /* In this example, I use the .html() method to alter the HTML 
    of a paragraph similar to how we would with .innerHTML. The html() method will replace everything entirely though. If you want to add content, replace html with append instead. */

    $("#changePara").click(function () {
        $(".para").html("This is a much longer sentence, filled with purpose and all sorts of words.");
    });

    // Example 5
    /* In this example, I make use of the "this" keyword to affect the 
    element we are currently working with. */
    
    $("#hoverChange").mouseenter(function() {
        $(this).html("Now there is some spunky new content in here!");
    });
    
    /* $(this) refers to $("hoverChange") since it has the event handler on it. */
    
    // Example 6
    /* In this example, I use the .val() method to get our input value.
    After I get the value, I use the .css method to apply a style. To apply 
    any ONE style, you can separate the property and value with a comma.
    To apply more than one style at once, you would follow the format for 
    doing multiple click handlers with .on(). I've included a commented out example below this one. '*/

    var box = $(".box"); // Get our div

    $("#submitColor").click(function () {
        var colorInput = $("#color").val(); // Retrieve input value
        box.css("background-color", colorInput);
    });


    /* Applying multiple CSS styles at once...in this example we change the color 
    and the border style
    
    $("#submitColor").click(function() {
        var colorInput = $("#color").val(); // Retrieve input value
        box.css({
            "background-color": colorInput,
            "border-style": "dashed"
        });
    });
    
    Each CSS style is presented like they are in a regular CSS file
    which is by property: value format. Each set of styles is separated 
    by a comma with no comma after the last style.
   */
});
