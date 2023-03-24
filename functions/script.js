//var name = prompt("What is your name?");
//var age = prompt("How old are you?");

function greeting(name="Veeti", age=16) {
    console.log("Hello " + name);
    console.log("Age is " + age);

    return name;
}
var defaultName = greeting();
var kalob = greeting("Kalob", 30);
var henry = greeting("Henry", 2);