// Sample products data
const products = [
    { id: 1, name: 'Sugar', price: 50 },
    { id: 2, name: 'Capsicum - Green (Loose)', price: 48 },
    { id: 3, name: 'Cauliflower', price: 25 },
    { id: 4, name: 'Coriander Leaves', price: 30},
    { id: 5, name: 'Cucumber', price: 25 },
    { id: 6, name: 'Ladies Fingers ', price: 40 },
    { id: 7, name: 'Onion', price: 36 },
    { id: 8, name: 'Potato', price: 20 },
    { id: 9, name: 'Tomato', price: 40 },
    { id: 10, name: 'Beans', price: 120 }
];

// Function to add item to cart
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

        // Show the added to cart checkmark
        const buttons = document.querySelectorAll('.add-to-cart');
        buttons.forEach(button => {
            if (button.getAttribute('onclick') === `addToCart(${productId})`) {
                button.style.backgroundColor = 'green';
                button.textContent = 'Added';
                button.disabled = true;
                button.nextElementSibling.style.display = 'inline';
            }
        });
    }
}

// Function to update cart UI
function updateCartUI() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    let totalCost = 0;

    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price}`;
        cartList.appendChild(li);
        totalCost += item.price;
    });

    document.getElementById('total-cost').textContent = `Total: ₹${totalCost.toFixed(2)}`;
}

// Function to handle checkout
function checkout() {
    alert('Checkout successful!');
    localStorage.removeItem('cart');
    updateCartUI();
}
