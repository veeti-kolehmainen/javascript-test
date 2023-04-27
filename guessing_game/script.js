var number = Number(prompt("Guess the number!"));
var status = document.getElementById("guessStatus");

while(number != 23) {
    console.log("WRONG!")
    number = Number(prompt("Guess the number!"));
    if(number == 23) {
        break;
    }
}
guessStatus.innerText = "Status: GUESSED!";
console.log("CORRECT!");
alert("YOU WON!! CONGRATULATIONS!!!");
while(1 < 2) {
    console.log("GET CRASHED!")
}

document.body.style.backgroundImage = "url('explosion.png')";
document.body.style.color = "white";