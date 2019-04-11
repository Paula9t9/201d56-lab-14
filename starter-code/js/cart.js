/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tableDoc = document.getElementById('cart');
  // TODO: Iterate over the items in the cart
  for (let i in cart.items.items) {
  // TODO: Create a TR
  let trEl = document.createElement('tr')
  // TODO: Create a TD for the delete link, quantity,  and the item
  let tdElLink = document.createElement('td');
  let tdElQuant = document.createElement('td');
  let tdElItem = document.createElement('td');
    tdElLink.textContent = 'X'
    trEl.appendChild(tdElLink);
    tdElItem.textContent = cart.items.items[i].product;
    console.log(cart.items.items[i].quantity + " Hello Cart Js " + cart.items.items[i].product)
    trEl.appendChild(tdElItem);
    tdElQuant.textContent = cart.items.items[i].quantity;
    trEl.appendChild(tdElQuant);




  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  tableDoc.appendChild(trEl);
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
