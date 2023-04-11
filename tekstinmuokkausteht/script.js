// prompti joka muuttaa h3
var text = prompt("Type something");
var textNode = document.getElementById("text");
textNode.innerHTML = 'You typed "' + text + '"';

// queryselector joka muuttaa .change
var change = document.querySelector(".change");
change.innerText = "Changed"

// queryselector joka muuttaa .titlestä small
var title = document.querySelector(".title");
var small = title.querySelector("small");
small.innerText = "WOWOWOWOOWWO";

// queryselector joka muuttaa linkkiä
var a = document.querySelector("a");
a.innerText = "Coding for everybody.com";

// queryselectorall joka muuttaa listasta ekan ja tokan
var lis = document.querySelectorAll("li")
lis[0].innerText = "I am the first CHANGED list element";
lis[1].innerHTML = "<a href='#'>I am suddenly a link!</a>"

var input = document.querySelector(".form-control")
console.log(input.value)