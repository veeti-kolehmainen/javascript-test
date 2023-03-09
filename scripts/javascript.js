var myName = "Veeti";
var course = "JavaScript for Beginners";
var myHobby = "gaming";
var age = 16;
var intro = "My name is " + myName + " and my age is " + age + ". I am currently doing " + course + ". My hobby is " + myHobby + "."
//alert(intro);
//var introduction = "Your name is " + age + " and your age is " + myname;
console.log(intro);

var test = document.getElementById("test");
var oldText = test.innerHTML;
test.innerHTML = "Hi welcome to JavaScript for beginners";