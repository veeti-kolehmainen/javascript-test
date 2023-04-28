class Person {
    //this.name = ""
    //this.age = ""
    //this.food = ""
    constructor(name, age, food) {
        //console.log(name, age, food)
        this.name = name
        this.age = Number(age)
        this.food = food
    }
    makeSound() {
        console.log(this.name + " says mmmmm to " + this.food);
    }
}

const kalob = new Person("Kalob", 30, "Pizza")
const nathan = new Person("Nathan", 28, "Salad")
kalob.makeSound()
nathan.makeSound()