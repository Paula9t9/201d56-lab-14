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

function clearCart() {
  
  let tableDoc = document.getElementById('cart');
  console.log(table.rows.length);
  tableDoc.deleteRow(table.rows.length-1);
}

function showCart() {

  let tableDoc = document.getElementById('cart');

  for (let i in cart.items.items) {
  
  let trEl = document.createElement('tr')
  
  let tdElLink = document.createElement('td');
  let tdElQuant = document.createElement('td');
  let tdElItem = document.createElement('td');

    //Used Stackoverflow to figure our a tag https://stackoverflow.com/questions/5519747/how-to-add-anchor-tags-dynamically-to-a-div-in-javascript
    // And this: https://stackoverflow.com/questions/40843494/call-javascript-function-from-anchor-html-tag 
  let aEl = document.createElement('a');
    aEl.setAttribute('href',"javascript:removeItemFromCart");
    aEl.innerHTML = "X";
    tdElLink.appendChild(aEl);
    aEl.id = i;


    trEl.appendChild(tdElLink);
    tdElItem.textContent = cart.items.items[i].product;
    console.log(cart.items.items[i].quantity + " Hello Cart Js " + cart.items.items[i].product)
    trEl.appendChild(tdElItem);
    tdElQuant.textContent = cart.items.items[i].quantity;
    trEl.appendChild(tdElQuant);

  tableDoc.appendChild(trEl);
  }
}

function removeItemFromCart(event) {

  console.log("Removed an item! (NOT XP)")
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  console.log(cart.items.items[event.target.id].product);
  // delete cart.items.items[event.target.id];
  cart.items.items.slice(event.target.id)

  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();

  // TODO: Re-draw the cart table
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
