function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function() {
        console.log("Hi, I am " + this.name + " and I am " + this.age + " years old.");
    };
}

const person1 = new Person('Alice', 25);
person1.introduce();

function Library(name, books) {
    this.name = name;
    this.books = books;
    this.listBooks = function() {
        console.log(this.books);
    };
    const myLibrary = new Library('City Library', ['1984', 'To Kill a Mockingbird']);
    myLibrary.listBooks();
}