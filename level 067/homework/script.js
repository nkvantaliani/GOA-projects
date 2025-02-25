function Car(brand, year = 2020) {
    this.brand = brand;
    this.year = year;
    this.describe = function() {
        console.log("This is a" + this.brand + "from" + this.year);
    };
}
const car1 = new Car('Toyota', 2018);
car1.describe(); 



function Rectangle(width, height) {
    this.width = width;
    this.height = height;

    this.area = function() {
        return this.width * this.height;
    };
}
const rect1 = new Rectangle(10, 5);
console.log(rect1.area()); 

function Counter() {
    this.value = 0;
    this.increment = function() {
        this.value++;
    };
    this.getValue = function() {
        return this.value;
    };
}
const counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.getValue());