var num1 = prompt("Give me a number.");
num1 = Number(num1);

console.log(typeof(num1))
textNode = document.getElementById("text");

if(num1 >= 18) {
    textNode.innerHTML = "Numbers 18 and above are cool";
} else if(num1 < 18) {
    textNode.innerHTML = "Numbers below 18 are cool too, I guess...";
} else {
    textNode.innerHTML = "That's not even a number!";
}