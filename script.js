
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("cart-count").innerText = cart.length;
  alert(name + " added to cart!");
}

function displayCart() {
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    cartItems.innerHTML += `
      <li>${item.name} - ₹${item.price}
        <button onclick="removeFromCart(${index})">Remove</button>
      </li>`;
  });
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("cart-count").innerText = cart.length;
  displayCart();
}

function toggleCart() {
  let cartSection = document.getElementById("cart");
  cartSection.style.display = cartSection.style.display === "none" ? "block" : "none";
}

function checkout() {
  // Redirect user to checkout page
  window.location.href = "checkout.html";
}




