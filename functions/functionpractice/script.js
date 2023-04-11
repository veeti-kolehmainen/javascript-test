/*
function doMath (num) {
    num = Number(num);
    if(num) {
        // do stuff in here
        var newNumber = (num + 100) / 4;
        return newNumber;
    } else {
        // not a real number
        return false;
    }
}

var customNum = doMath ("kalob");
console.log(customNum);

var customNum = doMath (30);
console.log(customNum);

var customNum = doMath (50);
console.log(customNum);

var customNum = doMath (27);
console.log(customNum);

var customNum = doMath (16);
console.log(customNum);

var customNum = doMath (92);
console.log(customNum);

var customNum = doMath (43);
console.log(customNum);

var customNum = doMath (64);
console.log(customNum); */

// function for getElementById
function $(id) {
    console.log("Id is:", id);
    return document.getElementById(id);
}

var title = $("title");
var title2 = $("title2");
title.innerHTML = "Custom inner text";
title2.innerHTML = "veRy cOol";

// Celcius to fahrenheit
function cToF(c_num) {
    return (c_num * 1.8) + 32;
}

var zero = cToF(0); console.log(zero)
var twenty = cToF(20); console.log(twenty)
var boiling = cToF(100); console.log(boiling)
var freezing = cToF(-40); console.log(freezing)