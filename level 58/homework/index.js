
const car = {
    brand: "Mercedes",
    model: "Mercedes-Benz 300 SL",
    year: 1957,
    startEngine: function(){console.log("Engine started")},
};

console.log(car.brand);
console.log(car.year);

car.color = "White";
car.year = 1955;

delete car.model;

car.startEngine();
