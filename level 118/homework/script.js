class Car{
    #owner
    #year
    constructor(owner, year, model){
        this.#owner = owner;
        this.#year = year;
        this.model = model
    }

    set owner(my_owner){
        this.#owner = my_owner;
    }

    get owner(){
        return this.#owner
    }

    set year(my_year){
        this.#year = my_year
    }

    get year(){
        return this.#year
    }
}

const car = new Car("me", 1999, "mercedes")
console.log(car);
console.log(car.owner);
console.log(car.year);