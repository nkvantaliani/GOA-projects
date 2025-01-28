class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Bird extends Animal {
    constructor(name, age, wings) {
        super(name, age);
        this.wings = wings;
    }
}

const bird = new Bird("Eagle", 5, 2)
console.log(bird.name); 
console.log(bird.age);


class Rectangle {
    constructor(length, width) {
      this.length = length;
      this.width = width;
    }

    get perimeter() {
      return 2 * (this.length + this.width);
    }
  }

  const rectangle = new Rectangle(10, 5);
  console.log(rectangle.perimeter);