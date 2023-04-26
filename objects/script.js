var name = "Kalob"; // Variable

// Function
function something() {}

var obj = {
    "name": "Kalob", // Property
    "sound": function() { // Method
        console.log("Meow")
    }, 
    "age": 30,
    "cats": 2
}

var zephyr = {
    "name": "Zephyr", // Property
    "sound": function() { // Method
        console.log("Meow")
    }, 
    "age": 4,
    "cats": 1
}

zephyr.cats // 1
zephyr.sound // Meow

// Object syntax
var objectName = {
    "key1": "value1",
    "key2": "value2"
}

objectName["key1"] // value1
objectName["key2"] // value2


/*obj.sound = function() {
    console.log(this.name);
}*/

/*person = {
    "name": "Veeti",
    "age": 16,
    "cats": 4
}*/

/*person["sound"] = function() {
    console.log("meow");
}*/

/*person.getCats = function() {
    alert(this.name + " has " + this.cats + " cats");
}*/