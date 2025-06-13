const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

const emptyCart = [];

const cartWithOneItem = [
  { name: "Laptop", price: 1000 },
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Bug: <= should be <
      total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration
  }
  return total;
}

function applyDiscount(total, discountRate) {
  if(discountRate <= 0 || discountRate >= 1) {
      return "Invalid discount";
  }
  return total - total * discountRate; // Bug: Missing validation for discountRate
}

function generateReceipt(cartItems, total) {
  if(isNaN(total)) {
      return "Invalid discount";
  }
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;

/*

Document the errors you found and how you fixed them in comments within your GitHub Repo.

As noted in the comments, because the for loop within the calculateTotal function used <=, cartItems[i] is undefined on the last iteration. Changing <= to < fixed this error.

Explain how debugging tools helped you locate and resolve issues in comments within your GitHub Repo.

I used a breakpoint inside the for loop within the calculateTotal function to locate and resolve the issue.

*/