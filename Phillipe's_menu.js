// Object to track quantities and prices of each item
const items = {
    white_mocha: { name: "White Mocha", price: 3.5, quantity: 0 },
    cappuccino: { name: "Cappuccino", price: 4, quantity: 0 },
    latte: { name: "Latte", price: 4, quantity: 0 },
    hot_chocolate: { name: "Hot Chocolate", price: 2.5, quantity: 0 },
    americano: { name: "Americano", price: 2, quantity: 0 },
    iced_coffee: { name: "Iced Coffee", price: 3, quantity: 0 },
    iced_latte: { name: "Iced Latte", price: 4, quantity: 0 },
    matcha_latte: { name: "Cold Iced Matcha Latte", price: 5, quantity: 0 },
    smoothies: { name: "Smoothies", price: 4.5, quantity: 0 },
    cold_brew: { name: "Cold Brew", price: 3, quantity: 0 },
    cheesecake: { name: "Cheesecake", price: 5, quantity: 0 },
    brownies: { name: "Brownies", price: 2.5, quantity: 0 },
    cinnamon_rolls: { name: "Cinnamon Rolls", price: 5.5, quantity: 0 },
    croissants: { name: "Croissants", price: 2, quantity: 0 },
    muffins: { name: "Muffins", price: 2, quantity: 0 }
};

// Function to increment the quantity of an item
function increment(itemId) {
    items[itemId].quantity++;
    updateDisplay(itemId);
}

// Function to decrement the quantity of an item
function decrement(itemId) {
    if (items[itemId].quantity > 0) {
        items[itemId].quantity--;
        updateDisplay(itemId);
    }
}

// Function to update the displayed quantity for an item
function updateDisplay(itemId) {
    const quantityElement = document.getElementById(itemId);
    if (quantityElement) {
        quantityElement.textContent = items[itemId].quantity;
    }
}

// Function to place the order
function placeOrder() {
    const orderedItems = Object.keys(items).filter(itemId => items[itemId].quantity > 0);

    if (orderedItems.length === 0) {
        alert("You haven't selected any items to order!");
        return;
    }

    const tableNumber = prompt("Please enter your table number:");
    if (!tableNumber) {
        alert("Table number is required to place the order!");
        return;
    }

    const orderDetails = orderedItems.map(itemId => {
        const { name, quantity, price } = items[itemId];
        return `${name}: ${quantity} x $${price.toFixed(2)} = $${(quantity * price).toFixed(2)}`;
    }).join('\n');

    const total = orderedItems.reduce((sum, itemId) => {
        return sum + items[itemId].price * items[itemId].quantity;
    }, 0);

    alert(`Your order for Table ${tableNumber}:
\n${orderDetails}\n\nTotal: $${total.toFixed(2)}\n\nThank you for ordering!`);
}

// Add an order button dynamically
document.addEventListener("DOMContentLoaded", () => {
    const orderButton = document.createElement('button');
    orderButton.id = "place-order-button";
    orderButton.textContent = "Place Order";
    orderButton.addEventListener("click", placeOrder);

    document.body.appendChild(orderButton);
});