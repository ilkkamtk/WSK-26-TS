"use strict";
// Create an empty array named 'cart' to store the items
const cart = [];
// TODO: Implement a loop to prompt the user for item details
// Use 'while' loop to keep prompting until an empty item name is entered
while (true) {
    // TODO: Prompt user for item name, price, and quantity
    const itemName = prompt('Enter item name');
    const itemPrice = prompt('Enter item price');
    const itemQuantity = prompt('Enter item quantity');
    // Break the loop if an empty or cancel
    if (!itemName || !itemPrice || !itemQuantity) {
        break;
    }
    if (isNaN(Number(itemPrice)) || isNaN(Number(itemQuantity))) {
        break;
    }
    // Create an item object and add it to the 'cart' array
    const newItem = {
        name: itemName,
        price: Number(itemPrice),
        quantity: Number(itemQuantity),
    };
    cart.push(newItem);
}
// Calculate the total cost using the 'map' and 'reduce' functions
const totalCost = cart
    .map((item) => item.price * item.quantity)
    .reduce((sum, cost) => sum + cost, 0);
// Display the total cost to the user
console.log(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);
