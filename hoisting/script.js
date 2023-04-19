(function getPerson() {
    if(myName === undefined) {
        myName = "Kalob";
    }

    console.log("Var not set yet", myName)
    console.log("Var is set", myName)

    var myName
})();

console.log("Name is", myName)

/*function getPerson(myName) {
    if(myName === undefined) {
        myName = "Veeti";
    }
    console.log("A thing", myName)
    var myName = "whatever";
}*/