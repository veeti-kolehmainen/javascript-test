const svanteButton = document.querySelector(".btn-svante")
const oveButton = document.querySelector(".btn-ove")
const kekkonenButton = document.querySelector(".btn-kekkonen")
const oskariButton = document.querySelector(".btn-oskari")

const catDescription = document.getElementById("catDescription");

class Cat {
    constructor(name, age, color) {
        this.name = name
        this.age = Number(age)
        this.color = color
    }
    description() {
        catDescription.innerText = this.name + " is " + this.age + " years old and it's " + this.color;
    }
}

const svante = new Cat("Svante", 7, "white and black");
const ove = new Cat("Ove", 4, "grey");
const kekkonen = new Cat("Kekkonen", 12, "striped brown");
const oskari = new Cat("Oskari", 5, "orange");

svanteButton.addEventListener("click", function(e) {
    svante.description();
})

oveButton.addEventListener("click", function(e) {
    ove.description();
})

kekkonenButton.addEventListener("click", function(e) {
    kekkonen.description();
})

oskariButton.addEventListener("click", function(e) {
    oskari.description();
})


//svante.description()