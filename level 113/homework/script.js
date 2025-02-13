// 1
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    get initials() {
      return `${this.firstName[0]}${this.lastName[0]}`;
    }
  }

const person = new Person("Nata", "Kvata");
console.log(person.initials);

// 2
class Person1 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    get ageInMonths() {
        if (this.age === null || this.age === undefined) {
          return null;
        } else {
          return this.age * 12;
        }
      }
}
const person1 = new Person1("Nata", 15);
console.log(person1.ageInMonths);

// 3 

class Person2 {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    get isRetired(){
        if (this.age === null || this.age === undefined) {
            return false;
          }
          return this.age >= 60;
        }
    }
const person2 = new Person2("Nata", 103);
console.log(person2.isRetired);

// 4

class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    get formattedPrice() {
      if (this.price == null) {
        return "price not available";
      }
      return `$${this.price.toFixed(2)}`
    }
}
const product1 = new Product("vashli",2.43);
console.log(product1.formattedPrice);

//5

class DiscountedProduct extends Product{
    constructor(name,price,discount){
        super(name,price);
        this.discount = discount;
    }
    get discountPrice() {
        if (this.price == null || this.discount == null) {
          return "price not available";
        }
        
        let discountedPrice = this.price - (this.price * this.discount) / 100;
        return `$${discountedPrice.toFixed(2)}`; 
      }
}
const product2 = new DiscountedProduct("vashli",20,10)
console.log(product2.discountPrice)

