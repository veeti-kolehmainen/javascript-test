var input = prompt("What course are you taking?");
var inputLower = input.toLowerCase();

var text = document.getElementById("text")

if (inputLower == "javascript for beginners") {
    text.innerHTML = "<strong>Welcome</strong> to JavaScript for <strong>Beginners</strong>";
} else {
    text.innerHTML = "You're in the <strong>WRONG</strong> course!";
}