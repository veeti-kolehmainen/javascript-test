var birthMonth = prompt("What month were you born in?");
var birthMonthLower = birthMonth.toLowerCase();
var text = document.getElementById("text");

if(birthMonthLower == "december" || birthMonthLower == "january" || birthMonthLower == "february") {
    text.innerHTML = "You were born in Winter";
} else if (birthMonthLower == "march" || birthMonthLower == "april" || birthMonthLower == "may") {
    text.innerHTML = "You were born in Spring";
} else if (birthMonthLower == "june" || birthMonthLower == "july" || birthMonthLower == "august") {
    text.innerHTML = "You were born in Summer";
} else if (birthMonthLower == "september" || birthMonthLower == "october" || birthMonthLower == "november") {
    text.innerHTML = "You were born in the Fall";
} else {
    text.innerHTML = "Invalid month";
}