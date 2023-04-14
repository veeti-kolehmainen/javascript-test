// regular function
// function functionname(param1, param2) {
//    return athing
// }

// this is an IIFE with an Anonymous function
var getName = (function() {
    return document.querySelector(".js-customName").value
})();

(function LoadApp() {
    console.log("App is loading");
    // code
    console.log("App is loaded")
})();