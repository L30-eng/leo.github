 
 // sign in
 document.addEventListener("DOMContentLoaded", function () {

    const loginBtn = document.getElementById("loginBtn");
    const loginModal = document.getElementById("loginModal");
    const closeLogin = document.getElementById("closeLogin");
    loginBtn.addEventListener("click", function (event) {
        event.preventDefault();
        loginModal.style.display = "flex";
    });
    closeLogin.addEventListener("click", function () {
        loginModal.style.display = "none";
    });
    loginModal.addEventListener("click", function (event) {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
    });
});



//search bar
const searchBtn = document.getElementById("searchBtn")
const searchContainer = document.querySelector(".search-container");

searchBtn.addEventListener("click", () => { 
    searchContainer.classList.toggle("active");

});


//add to cart
let cart = [];
// Get elements
const cartCount = document.getElementById("cart-count");
const addCartButtons = document.querySelectorAll(".add-cart");

// Add item to cart
addCartButtons.forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        const name = this.dataset.name;
        const price = Number(this.dataset.price);
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                name: name,
                price: price,
                quantity: 1
            });
        }
        updateCartCount();
        console.log("Cart:", cart);
        alert(name + " added to cart!");
    });
});
function updateCartCount() {
    const totalQuantity = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );
    cartCount.textContent = totalQuantity;
}


  