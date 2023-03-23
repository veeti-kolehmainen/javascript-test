var isCat = true;

if(isCat) {
    console.log("ZEPHYR IS A CAT");
} else {
    console.log("IS NOT A CAT");
}


var userName = prompt ("Enter name");

if(userName.toLowerCase() == "zephyr") {
    var isCat = true;
} else {
    var isCat = false;
}

if(isCat) {
    alert("You're a cat!");
} else {
    alert("You're NOT a cat!");
}

if(isCat == false) {
    alert("not a cat")
}

// if isCat is false
if(!isCat) {}

// This also means if isCat is false
if(isCat != true) {
    //this is the false block to execute
}

var isCat = 1; // true
var isCat = 0; // false

if(isCat) {} // true
if(!isCat) {} // false