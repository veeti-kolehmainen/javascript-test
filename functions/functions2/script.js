/*function greeting(name="Veeti", age=16) {
    console.log("Hello " + name);
    console.log("Age is " + age);

    return name;
}
var defaultName = greeting();
var kalob = greeting("Kalob", 30);
var henry = greeting("Henry", 2);*/
var userPrompt = prompt("What is your name?");
var userGame = prompt("What is your favourite game?");

function favGame(name="Veeti", game="Valorant") {
    console.log(name + "'s favourite game is " + game);

    return name;
}

var veeti = favGame();
var jesse = favGame("Jesse", "Furry Love 2");
var alek = favGame("Alek", "Apex Legends");
var joona = favGame("Joona", "League of Legends");
var user = favGame(userPrompt, userGame);