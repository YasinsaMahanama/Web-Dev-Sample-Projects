// Define an empty array to store cart items
const cart = [];

// Function to add a product to the cart
function addToCart(product) {
    cart.push(product);
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    // Clear the existing cart display
    cartItemsList.innerHTML = "";

    // Populate the cart display with items
    let totalPrice = 0;
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="cart-item">
                <img src="${item.images[0]}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4>${item.title}</h4>
                    <p>Price: $${item.price.toFixed(2)}</p>
                </div>
                <button class="remove-button" onclick="removeFromCart(${cart.indexOf(item)})">Remove</button>
            </div>
        `; 
        //li.textContent = `${item.title} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        totalPrice += item.price;
    });

    // Update the total price in the cart
    cartTotal.textContent = totalPrice.toFixed(2);
}


fetch("https://dummyjson.com/products")
.then((data) => {
    return data.json();
})
.then((objectData) => {
    //console.log(objectData[0].title);
    let product = "";
  // Update the product listing HTML generation
    objectData.products.forEach((values, index) => {
        product += `<div class="card">
            <h3 class="title">${values.title}</h3>
            <img src="${values.images[0]}" class="images">
            <p>${values.description}</p>
            <p class="price">$ ${values.price}</p>
            <button class="add-to-cart-button">Add to Cart</button>
        </div>`;
    });
        // Add a click event listener to the "Add to Cart" buttons
    document.querySelectorAll(".add-to-cart-button").forEach((button, index) => {
        button.addEventListener("click", () => {
            addToCart(objectData.products[index]);
        });
    });
})
.catch((err) => {
    console.log(err);
})

let objectData; // Declare the objectData variable globally

fetch("https://dummyjson.com/products")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    objectData = data; // Store the fetched data in the objectData variable
    displayProducts(); // Call the function to display products after fetching data
  })
  .catch((err) => {
    console.log(err);
});


// Function to add a product to the cart
function addToCart(productIndex) {
    const product = objectData.products[productIndex];
    cart.push(product);
    updateCart();
}
  
  // Function to display products
function displayProducts() {
    const cardsContainer = document.getElementById("cards");

    objectData.products.forEach((values, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3 class="title">${values.title}</h3>
        <img src="${values.images[0]}" class="images">
        <p>${values.description}</p>
        <p class="price">$ ${values.price}</p>
        <button class="add-to-cart-button" onclick="addToCart(${index})">Add to Cart</button>
    `;

    cardsContainer.appendChild(card);
    });
}
  
  // Call displayProducts() to generate the product cards
displayProducts();


// Function to remove a product from the cart
function removeFromCart(productIndex) {
    cart.splice(productIndex, 1); // Remove the product from the cart array
    updateCart(); // Update the cart display
}
  
  // Function to update the cart display
function updateCart() {
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    // Clear the existing cart display
    cartItemsList.innerHTML = "";

    // Populate the cart display with items
    let totalPrice = 0;
    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <div class="cart-flex">
        <div class="cart-item">
        <img src="${item.images[0]}" class="cart-item-image">
        <div class="cart-item-details">
            <h4>${item.title}</h4>
            <p>Price: $${item.price.toFixed(2)}</p>
        </div>
            <button class="remove-button" onclick="removeFromCart(${index})">Remove</button>
        </div>
        </div>
        `;
        cartItemsList.appendChild(li);
        totalPrice += item.price;
    });

    // Update the total price in the cart
    cartTotal.textContent = totalPrice.toFixed(2);
}
  
  // Add a click event listener to the "Add to Cart" buttons
document.querySelectorAll(".add-to-cart-button").forEach((button, index) => {
    button.addEventListener("click", () => {
      addToCart(objectData.products[index]);
    });
});
  
  // Call displayProducts() to generate the product cards
displayProducts();
   
  
