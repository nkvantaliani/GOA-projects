class Animal {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    sound() {
        return  `${this.name}: woof woof.`;
    }
}


class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    engine() {
        return  `${this.brand} ${this.model}: grrrrrratatat`;
    }
}

class Person {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }

    introduce() {
        return `My name is ${this.name}` ;
    }
}

const animal1 = new Animal("Dog", 5, "Brown");
const animal2 = new Animal("Cat", 3, "Black");
const animal3 = new Animal("Parrot", 2, "Green");

const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("BMW", "X5", 2021);
const car3 = new Car("Tesla", "Model S", 2023);

const person1 = new Person("Nata", 30, "unemployed ");
const person2 = new Person("Nino", 25, "doctor");
const person3 = new Person("Lizi", 40, "driver");

console.log(animal1, animal1.sound());

console.log(car1, car1.engine());

console.log(person1, person1.introduce());