class Animal {
    constructor(name, hasFur, diet, habitats) {
        this.name = name;
        this.hasFur = hasFur;
        this.diet = diet;
        this.habitats = habitats;
    }

    displayAnimals() {
        return `
        <div class="animals">
            <div class="animal-name">${this.name}</div>
            <div class="animal-attribute"><span>Has Fur:</span> ${this.hasFur}</div>
            <div class="animal-attribute"><span>Diet:</span> ${this.diet}</div>
            <div class="animal-attribute"><span>Habitats:</span> ${this.habitats}</div>
        </div>`;
    }
}

class Page {
    constructor(arr) {
        this.animals = arr
    }
    display() {
        let container = document.getElementById("animal-list");
        this.animals.forEach(item => {
            container.innerHTML += item.displayAnimals()
        });
    }
}

const animals = [
    new Animal("Lion", "Yes", "Carnivore", "Savannas, grasslands, and woodlands"),
    new Animal("Elephant", "No", "Herbivore", "Forests, savannas, and grasslands"),
    new Animal("Dolphin", "No", "Carnivore", "Oceans and coastal areas"),
    new Animal("Kangaroo", "No", "Herbivore", "Australian grasslands and forests"),
    new Animal("Polar Bear", "Yes", "Carnivore", "Arctic regions and sea ice"),
    new Animal("Penguin", "No", "Carnivore", "Antarctica and nearby islands"),
];


new Page(animals).display()

