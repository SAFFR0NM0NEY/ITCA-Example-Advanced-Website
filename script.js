// Product list (normally you'd load this from JSON or API)
const products = [
  {
    id: "b001",
    name: "The Art of War",
    category: "Books",
    price: 120.00,
    image: "assets/images/art-of-war.jpg",
    description: "A classic strategy guide by Sun Tzu."
  },
  {
    id: "e101",
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 899.99,
    image: "assets/images/headphones.jpg",
    description: "Noise-cancelling over-ear headphones."
  }
];

// Reference to the product container
const container = document.getElementById("product-container");

// Render product cards
products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p><strong>R${product.price.toFixed(2)}</strong></p>
    <button onclick="addToCart('${product.id}')">Add to Cart</button>
  `;
  container.appendChild(card);
});

// Add to cart function (to be expanded later)
function addToCart(id) {
  alert(`Product ${id} added to cart (function to be expanded later)`);
}

// Filter by category
document.querySelectorAll(".nav-menu a[data-category]").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const category = e.target.dataset.category;
    showProductsByCategory(category);
  });
});

function showProductsByCategory(category) {
  container.innerHTML = ""; // Clear existing products
  const filtered = products.filter(p => p.category === category);
  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>R${product.price.toFixed(2)}</strong></p>
      <button onclick="addToCart('${product.id}')">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}
