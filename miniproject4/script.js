
var priceAmount = prompt("How much did it cost?");
var tipAmount = prompt("How much would you like to tip?");

priceAmount = Number(priceAmount);
tipAmount = Number(tipAmount);

function tipCalculator(priceAmount, tipAmount) {
    var totalTip = (priceAmount * tipAmount) / 100;
    var totalAmount = totalTip + priceAmount;
    return totalAmount;
}

var totalBill = tipCalculator(priceAmount, tipAmount);

var totalNode = document.getElementById("total");
totalNode.innerHTML = "Your total bill is: " + totalBill + "€";
console.log(totalBill);