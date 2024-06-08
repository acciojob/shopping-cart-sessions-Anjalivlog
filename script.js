// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const clearCartBtn = document.getElementById("clear-cart-btn");

// Initialize cart from session storage
let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart
function renderCart() {
  // Clear the cart list
  cartList.innerHTML = "";
  
  // Add each product in the cart to the list
  cart.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - $${product.price}`;
    cartList.appendChild(li);
  });
}

// Add event listener to product list
productList.addEventListener("click", function(event) {
  if (event.target.className === "add-to-cart-btn") {
    const productId = event.target.getAttribute("data-id");
    const product = products.find((p) => p.id === parseInt(productId));
    
    // Add product to cart
    cart.push(product);
    
    // Store cart in session storage
    sessionStorage.setItem('cart', JSON.stringify(cart));
    
    // Update the cart display
    renderCart();
  }
});

// Add event listener to clear cart button
clearCartBtn.addEventListener("click", function() {
  // Clear the cart
  cart = [];
  
  // Store cart in session storage
  sessionStorage.setItem('cart', JSON.stringify(cart));
  
  // Update the cart display
  renderCart();
});

// Initial render
renderProducts();
renderCart();