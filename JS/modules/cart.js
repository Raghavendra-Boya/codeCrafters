let cart = [];
export default function addToCart(product){
    cart.push(product);
    console.log(`${product.name} is added to cart`);
}

export  function viewCart(){
    return cart;
}