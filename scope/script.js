
// this is a global var
var course = "JavaScript for Beginners";

// this is a global function
(function doAThing() {
    // this is a LOCAL variable
    var teacher = "Kalob Taulien";
    console.log("!!!", teacher)
    console.log("!!!", course)
})();
// console log
console.log("OUT OF SCOPE:", teacher)

