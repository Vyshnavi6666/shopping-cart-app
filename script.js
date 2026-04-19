// REGISTER
function register() {
  let user = document.getElementById("regUser").value;
  let pass = document.getElementById("regPass").value;

  localStorage.setItem("user", user);
  localStorage.setItem("pass", pass);

  alert("Registered Successfully!");
  window.location.href = "index.html";
}

// LOGIN
function login() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  if(user === localStorage.getItem("user") &&
     pass === localStorage.getItem("pass")) {
    window.location.href = "catalog.html";
  } else {
    alert("Invalid credentials");
  }
}

// PRODUCTS
const products = [
  {id:1, name:"Shoes", price:1000},
  {id:2, name:"Shirt", price:500},
  {id:3, name:"Watch", price:2000}
];

// LOAD PRODUCTS
function loadProducts() {
  let container = document.getElementById("products");

  products.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add</button>
      </div>
    `;
  });
}

// ADD TO CART
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

// LOAD CART
function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.getElementById("cartItems");

  cart.forEach(id => {
    let p = products.find(x => x.id === id);
    container.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
      </div>
    `;
  });
}