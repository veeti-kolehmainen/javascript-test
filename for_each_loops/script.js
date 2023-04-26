var lis = document.querySelectorAll(".js-text")

lis.forEach(function(node, index) {
    //console.log(node.innerText);
    if(index >= 10) {
        node.remove();
        return false
    }
    //node.innerText = (index * 12) + " is the number"
})


/*var names = ["Kalob", "Nathan", "Zephyr", "Henry"];
// for each loop
names.forEach(function(name, index) {
    console.log(index, name)
})*/