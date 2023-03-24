//var userName = "Veeti";
var userName = prompt("What is your name?", "Veeti");
var welcomeNode = document.getElementById("welcome");

if(userName.toLowerCase() == "veeti") {
    welcomeNode.innerText = "Welcome to your website Veeti";
} else {
    welcomeNode.innerText = "Get out!";
}