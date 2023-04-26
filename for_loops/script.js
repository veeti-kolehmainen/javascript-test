var names = ["Kalob", "Nathan", "Zephyr", "Henry"]

var words = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet gravida nunc, a molestie erat. Curabitur cursus nulla in tellus blandit ultricies. Suspendisse potenti. Etiam ultricies laoreet orci eget volutpat. Nulla rhoncus lacinia orci ut dictum. Cras lobortis enim vitae nisl molestie, vel feugiat mauris molestie. Integer lacinia dolor.".split(" ");

/*function toEmailAdress(name) {
    return name.toLowerCase() + "@gmail.com"
}*/

// i = interval
for(var i = 0; i < names.length; i++) {
    var currentName = names[i].toLowerCase() + "@gmail.com";
    //var currentName = toEmailAdress(names[i]);
    console.log(currentName)
    // i = i + 1
}

// i = interval
for(var i = 0; i < words.length; i++) {
    var currentEmail = words[i].toLowerCase() + "@gmail.com";

    //if(i==10) {
    //    break;
    //}

    if(i % 2 == 0) {
        continue;
    }
    console.log(i, currentEmail)
    // i = i + 1
}



/*for (let index = 0; index < Array.length; index++) {
    const element = Array[index];
}*/


/*for(var i=0; i < 10; i++) {
    console.log(i)
}*/

