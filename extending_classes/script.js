class Animal {
    constructor(species, weight, height) {
        this.species = String(species);
        this.weight = Number(weight);
        this.height = Number(height);
    }

    getInfo() {
        console.log(this.species + " weighs " + this.weight + " and is " + this.height + " tall")
    }

    speak() {
        console.log("I SAY A THING");
    }
}

class Cat extends Animal {
    constructor(species, weight, height) {
        super(species, weight, height)

        this.color = "Grey"
    }

    sleep() {
        console.log(this.species + " is sleeping for 16 hours a day");
    }

    speak() {
        console.log("MEOWWWW");
    }
}

class Dog extends Animal {

}

const zephyr = new Cat("cat", 13, 13);
const doggo = new Dog("Veto", 140, 3.5);
doggo.getInfo();

console.log(zephyr);
zephyr.getInfo();
zephyr.sleep();
zephyr.speak();

//const tiger = new Animal("Tiger", 200, 36);
//tiger.getInfo()