var myName = "Veeti";
var myAge = "16";
var sentence = "Hello, my name is " + myName + " and I am " + myAge + " years old."

var test = document.getElementById("test");
var oldText = test.innerHTML;
test.innerHTML = sentence;