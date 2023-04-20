// variables
var bgColor = document.querySelector(".js-bg-color");
var textColor = document.querySelector(".js-text-color");
var body = document.querySelector("body");

// CSS inside JavaScript
body.style.backgroundColor = "tan";
body.style.color = "white";

bgColor.style.borderRadius = "10px"
bgColor.style.border = "5px dotted black"

// changes the background color to whatever the user writes
bgColor.addEventListener("keyup", function(event){
    var color = event.target.value
    body.style.backgroundColor = event.target.value
    // possible list of colors
    switch(color) {
        case "red":
        case "white":
        case "blue":
            body.style.backgroundColor = color
            break
        default:
            body.style.backgroundColor = "tan"
            break
    }
});

// changes the text color to whatever the user writes
textColor.addEventListener("keyup", function(event){
    // console.log("text color", event.target.value);
    body.style.color = event.target.value
});
