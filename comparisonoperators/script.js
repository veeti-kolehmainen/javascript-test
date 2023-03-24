/*
!=
>=
>
<
<=
===
*/

/*
var course = "js";
if(course != "php") {
    console.log("Is a JS course!");
}
*/

/*
var age = 25;
if(age >= 18) {
    console.log("You can vote!");
}
if(age >= 21) {
    console.log("You can drink alcohol");
}
*/
/*
var fullName = "Veeti";
if(fullName.length < 10) {
    console.log("Short Name");
}
*/
/*
var name = "Veeti";
if(name.length <= 10) {
    console.log("Total length is <= 10", name.length)
}
*/

var age = "30.0";
age = Number(age);
if(age === 30) {
    console.log("You are thirty");
} else {
    console.warn("Wrong data type");
}