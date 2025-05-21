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

const container = document.getElementById("product-container");

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

function addToCart(id) {
  alert(`Product ${id} added to cart (function to be expanded later)`);
}

