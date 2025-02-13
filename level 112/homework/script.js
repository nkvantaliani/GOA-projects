class Book {
    constructor(title, author, year, genre, cover) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
        this.cover = cover;
    }

    displayBook() {
        return `
        <div class="book-card">
            <img src="${this.cover}">
            <div class="book-title">${this.title}</div>
            <div class="book-info"><strong>Author:</strong> ${this.author}</div>
            <div class="book-info"><strong>Year:</strong> ${this.year}</div>
            <div class="book-info"><strong>Genre:</strong> ${this.genre}</div>
        </div>`;
    }
}

class AdventureBook extends Book {
    constructor(title, author, year, setting, cover) {
        super(title, author, year, "Adventure", cover);
        this.setting = setting;
    }

    displayBook() {
        return `
        <div class="book-card">
            <img src="${this.cover}">
            <div class="book-title">${this.title}</div>
            <div class="book-info"><strong>Author:</strong> ${this.author}</div>
            <div class="book-info"><strong>Year:</strong> ${this.year}</div>
            <div class="book-info"><strong>Genre:</strong> Adventure</div>
            <div class="book-info"><strong>Setting:</strong> ${this.setting}</div>
        </div>`;
    }
}

class SatireBook extends Book {
    constructor(title, author, year, target, cover) {
        super(title, author, year, "Satire", cover);
        this.target = target;
    }

    displayBook() {
        return `
        <div class="book-card">
            <img src="${this.cover}">
            <div class="book-title">${this.title}</div>
            <div class="book-info"><strong>Author:</strong> ${this.author}</div>
            <div class="book-info"><strong>Year:</strong> ${this.year}</div>
            <div class="book-info"><strong>Genre:</strong> Satire</div>
            <div class="book-info"><strong>Target:</strong> ${this.target}</div>
        </div>`;
    }
}

class FantasyBook extends Book {
    constructor(title, author, year, magicSystem, cover) {
        super(title, author, year, "Fantasy", cover);
        this.magicSystem = magicSystem;
    }

    displayBook() {
        return `
        <div class="book-card">
            <img src="${this.cover}">
            <div class="book-title">${this.title}</div>
            <div class="book-info"><strong>Author:</strong> ${this.author}</div>
            <div class="book-info"><strong>Year:</strong> ${this.year}</div>
            <div class="book-info"><strong>Genre:</strong> Fantasy</div>
            <div class="book-info"><strong>Magic System:</strong> ${this.magicSystem}</div>
        </div>`;
    }
}

class Page {
    constructor(books) {
        this.books = books;
    }

    display() {
        let container = document.getElementById("book-list");
        this.books.forEach(book => {
            container.innerHTML += book.displayBook();
        });
    }
}

const books = [
    new AdventureBook("The Hobbit", "J.R.R. Tolkien", 1937, "Middle-earth", "https://images-na.ssl-images-amazon.com/images/I/81a4kCNuH+L.jpg"),
    new SatireBook("Animal Farm", "George Orwell", 1945, "Totalitarianism", "https://m.media-amazon.com/images/I/71je3-DsQEL.jpg"),
    new FantasyBook("Harry Potter", "J.K. Rowling", 1997, "Wand Magic", "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg"),
    new AdventureBook("Treasure Island", "Robert Louis Stevenson", 1883, "The high seas", "https://sterling-us.imgix.net/covers/9781454951209.jpg?auto=format&h=648"),
    new SatireBook("Catch-22", "Joseph Heller", 1961, "War Bureaucracy", "https://upload.wikimedia.org/wikipedia/commons/8/80/Catch-22_%281961%29_front_cover%2C_first_edition.jpg"),
    new FantasyBook("The Name of the Wind", "Patrick Rothfuss", 2007, "Sympathetic Magic", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhBNv0GRANOxmpOhfArIHUB5bIIfOKXTQFg&s"),
];

new Page(books).display();
