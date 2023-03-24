
var age = "30";
age = Number(age);
console.log(typeof(age));

var age = prompt("Your age is?");
age = Number(age);

if(age) {
    alert("You have a proper number");
    if(age >= 18) {
        console.log("You can vote!")
    }
} else {
    alert("You didn't enter a proper number!");
}
console.log(typeof(age));


var age = 30;
age = String(age);
console.log(age, typeof(age));

var isCat = "true";
isCat = Boolean(isCat);
console.log(isCat, typeof(isCat))

var course = "JS for Beginners";
course = Array(course);
