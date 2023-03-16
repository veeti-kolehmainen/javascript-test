var input = prompt("What course are you taking?");
var inputLower = input.toLowerCase();

var text = document.getElementById("text")

if (inputLower == "javascript for beginners") {
    text.innerHTML = "<b>Welcome</b> to JavaScript for <strong>Beginners</strong>";
} else {
    text.innerHTML = "You're in the <strong>WRONG</strong> course!";
}

var input2 = prompt("How old are you?");

var age = document.getElementById("age");


if (input2 >= 18) {
    age.innerHTML = "You are an adult!";
} else {
    age.innerHTML = "You are underage.";
}