// while loops syntax

/*var num = Number(prompt("Give me a number"));
var startingNum = 1;
while(startingNum <= num) {
    console.log(startingNum);
    startingNum++;
}*/

/*
while(num <= 1000) {
    console.log(num);

    num++;
    // num = num + 1
}
*/

var ul = document.querySelector(".js-list");
var html = "";
var num = Number(prompt("Give me a number"));
var startingNum = 1;

while(startingNum <= num) {
    html = html + "<li>Iteration: " + startingNum + "</li>";
    startingNum++;
}

ul.innerHTML = html