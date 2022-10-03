// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional

var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  const selectedProduct = products.find((x) => x.id === id);
  cartList.push(selectedProduct);
  let counter = document.getElementById("count_product");

  counter.innerText = parseInt(counter.innerText) + 1;
  generateCart();
}

// Exercise 2
function cleanCart() {
  cartList.length = 0;
  cart.length = 0;

  document.getElementById("cart_list").innerHTML = "";
  document.getElementById("total_price").innerText = 0;
  document.getElementById("count_product").innerText = 0;
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  const sum = cart.reduce((accumulator, product) => {
    return accumulator + product.subtotalWithDiscount;
  }, 0);

  return sum;
}

// Exercise 4
function generateCart() {
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

  cart = [];

  cartList.forEach((cartListProduct) => {
    //Checks if the product is already in the cart
    const foundIndex = cart
      .map((cartProduct) => cartProduct.name)
      .indexOf(cartListProduct.name);

    //If it is not in the cart, it will add it
    if (foundIndex === -1) {
      cart.push({
        name: cartListProduct.name,
        price: cartListProduct.price,
        type: cartListProduct.name,
        cantidad: 1,
        subtotal: cartListProduct.price,
        subtotalWithDiscount: cartListProduct.price,
      });
      // If the product is in the cart, it will update its quantity and total price
    } else {
      cart[foundIndex].cantidad += 1;
      cart[foundIndex].subtotal = cart[foundIndex].subtotalWithDiscount =
        cart[foundIndex].cantidad * cart[foundIndex].price;
    }
  });
  applyPromotionsCart();
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  let newCart = cart.map((cartProduct) => {
    //Find the product in the product list to fetch the offer information
    const foundProduct = products.find(
      (product) => product.name == cartProduct.name
    );
    //Check if the product has an offer
    if (foundProduct.offer) {
      if (cartProduct.cantidad >= foundProduct.offer.number) {
        // Calculate and assigns the subtotalWithDiscount based on product quantity, price and discount in %
        cartProduct.subtotalWithDiscount =
          (cartProduct.cantidad *
            cartProduct.price *
            (100 - foundProduct.offer.percent)) /
          100;
      }
    } else {
    }
  });
}

// Exercise 6
function printCart() {
  if (cart.length == 0) {
    return;
  }
  // Fill the shopping cart modal manipulating the shopping cart dom
  let cartListRender = document.getElementById("cart_list");

  //Create table
  var myTable = "";
  for (let cartProduct of cart) {
    myTable += `<tr><th scope="row">${cartProduct.name}</th><td>$${cartProduct.price}</td><td>${cartProduct.cantidad}</td><td>$${cartProduct.subtotalWithDiscount}</td></tr>`;
  }

  //name: "cooking oil",
  //     subtotal: 31.5,
  //     subtotalWithDiscount: 30

  cartListRender.innerHTML = myTable;
  document.getElementById("total_price").innerText = calculateTotal();
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
