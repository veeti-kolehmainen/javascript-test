const person = {
    "name": prompt("What is your name?"),
    "age": prompt("How old are you?"),
    "food": prompt("What is your favorite food?")
}

const h1 = document.getElementById("h1");

h1.innerHTML = `${person.name} is ${person.age} years old and their favorite food is ${person.food}`;