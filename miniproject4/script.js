
var priceAmount = prompt("How much did it cost?");
var tipAmount = prompt("How much would you like to tip?");
var totalTip = priceAmount * tipAmount / 100;

priceAmount = Number(priceAmount);
tipAmount = Number(tipAmount);

function tipCalculator(priceAmount, tipAmount) {
    var totalAmount = totalTip + priceAmount;

    return totalAmount;
}

var totalBill = tipCalculator(priceAmount, tipAmount);

var totalNode = document.getElementById("total");
totalNode.innerHTML = "Your total bill is: " + totalBill + "€";
console.log(totalBill);

var totalTipNode = document.getElementById("tip");
totalTipNode.innerHTML = "Your total tip is " + totalTip + "€";
console.log(totalTip);