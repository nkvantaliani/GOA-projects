// პროდუქციის მასივი
const products = [
    {
      name: "Laptop",
      price: "$1200",
      description: "High performance laptop with 16GB RAM and 512GB SSD.",
      image: "https://via.placeholder.com/300x200?text=Laptop",
    },
    {
      name: "Smartphone",
      price: "$800",
      description: "Latest smartphone with excellent camera and display.",
      image: "https://via.placeholder.com/300x200?text=Smartphone",
    },
    {
      name: "Headphones",
      price: "$150",
      description: "Noise-cancelling headphones with great sound quality.",
      image: "https://via.placeholder.com/300x200?text=Headphones",
    },
  ];
  
  // კარტების კონტეინერის პოვნა
  const cardsContainer = document.getElementById("cards-container");
  
  // ობიექტებზე for loop-ის გავლა
  products.forEach(product => {
    // ახალი ელემენტის შექმნა
    const card = document.createElement("div");
    card.classList.add("card");
  
    // კარტის შინაარსი
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <div class="price">${product.price}</div>
      <button>Add to Cart</button>
    `;
  
    // კარტის კონტეინერში დამატება
    cardsContainer.appendChild(card);
  });
  