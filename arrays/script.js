names = ["Veeti", "Alek", "Jesse", "Joona"];

var userName = prompt ("What is your name?");
names.push(userName);
var usernameNode = document.getElementById("username");
usernameNode.innerHTML = names [4];