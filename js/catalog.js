/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) { 
    let opt = document.createElement('option') //catalog is the name of the form 
    //console.log(Product.allProducts[i].name); 
    opt.items = Product.allProducts[i].name; //Product is the name of the new items in the function
    opt.innerHTML = Product.allProducts[i].name;
    selectElement.appendChild(opt); 
 
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
 event.preventDefault(); 
  // TODO: Prevent the page from reloading

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter('add');
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
    let item = document.getElementById("items").value
    let quantity = document.getElementById ("quantity").value 
    cart.addItem(item,quantity)
    
  }
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart


// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
 document.getElementById('itemCount').textContent = `${cart.items.length}`; 
 for (let i = 0; i < cart.items.length; i++){
  let items= cart.items[i]
  console.log (items)
 }
//  itemCount.innerText = cart.items.length; 
//  let totalItems = 0; 
//  for (let i = 0; i < items.length; i++){
//   totalItems +=(cart[i].items.length); 
//  }
// return totalItems;
 //how do we record with quantity 
}  

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {

  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
