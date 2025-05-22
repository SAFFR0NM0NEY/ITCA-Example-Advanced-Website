document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("product-container");

  // Fetch products from JSON
  fetch("products.json")
    .then(res => res.json())
    .then(products => {
      renderProducts(products);
      setupCategoryFiltering(products);
    })
    .catch(error => {
      console.error("Failed to load products:", error);
      container.innerHTML = "<p>Failed to load products.</p>";
    });

  function renderProducts(productList) {
    container.innerHTML = "";
    productList.forEach(product => {
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

  function addToCart(id) {
    alert(`Product ${id} added to cart (function to be expanded later)`);
  }

  function setupCategoryFiltering(products) {
    document.querySelectorAll(".nav-menu a[data-category]").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const category = e.target.dataset.category;
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
      });
    });
  }
});


  const container = document.getElementById("product-container");

  function renderProducts(productList) {
    container.innerHTML = "";
    productList.forEach(product => {
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

  function addToCart(id) {
    alert(`Product ${id} added to cart (function to be expanded later)`);
  }

  renderProducts(products); // Show all by default

  document.querySelectorAll(".nav-menu a[data-category]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const category = e.target.dataset.category;
      const filtered = products.filter(p => p.category === category);
      renderProducts(filtered);
    });
  });