/*var change = document.querySelector(".change");
change.innerText = "Changed"*/

var title = document.querySelector("title");

var small = title.querySelector("small");

small.innerText = "WOWOWOWOOWWO";

var a = document.querySelector("a");
a.innerText = "Coding for everybody.com";

var lis = document.querySelectorAll("li")
lis[0].innerText = "I am the first CHANGED list element";
lis[1].innerHTML = "<a href='#'>I am suddenly a link!</a>"

var input = document.querySelector(".form-control")
console.log(input.value)