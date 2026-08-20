/*
what are the JS Modules:
module in JS allows you to split your code into seperate files based on the functionality, ech file we can consider as Module can:

-contains related variables and functions
-by using export and import key word 
-helps in organization ti maintan the code in large application



1. view Products
2. add products
3. make payaments


*/


import {getAllProducts} from './products.js'
import * as cart from './cart.js'
import {makePayment} from './payment.js'

const products = getAllProducts()
console.log(`available Products,`, products);

aaaa(products[0]);
aaaa(products[1]);

const cartItems = viewCart();
makePayment(cartItems)