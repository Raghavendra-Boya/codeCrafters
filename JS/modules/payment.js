export function makePayment(cartItems){
    const total = cartItems.reduce((sum,item)=> sum+item.price,0);
    console.log(`Payment of ${total} successful`);
}