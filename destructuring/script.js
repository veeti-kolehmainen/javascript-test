//var arr = ["Kalob", "Nathan", "Zephyr", "Prairie", "Henry", "Veto", "Maya"]
//const kalob = arr[0]
//const nathan = arr[1]

//let [kalob, nathan, zephyr, ...everyoneElse] = arr
//console.log(everyoneElse)

//var fullName = prompt("What is your FULL name?") // string
// Veeti Kolehmainen
//let [firstName, lastName] = fullName.split(" ")
//fullName = fullName.split(" ")
//const firstName = fullName[0]
//const lastName = lastName[1]

//console.log(`${firstName} is the first name`);
//console.log(`${lastName} is the last name`);

const person = {
    "first_name_for_the_user": "DEFINITELY NOT KALOB",
    "age": 30,
    "cats": 2,
    "food": "pizza",
    "color": "red",
}

let {
    first_name_for_the_user: firstName, food,
    // key: newVarNameIs
    food: favoriteFood,
    color = "blue"
} = person

//let {name, food} = person
console.log(`Name is ${firstName}`)
console.log(`Favorite Food is ${favoriteFood}`)
console.log(`Fav color is ${color}`)