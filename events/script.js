/*var totalClicks = 0;
function clickMe() {
    totalClicks++;
    console.log("You've clicked this button " + totalClicks + " times");
}*/
var num = 100;

function calculate() {
    var input = document.querySelector(".form-control");
    var value = Number(input.value);
    var totalValue = value + num;

    var h1 = document.querySelectorAll("h1")[0];
    var span = h1.querySelector("span");

    span.innerText = totalValue;
}