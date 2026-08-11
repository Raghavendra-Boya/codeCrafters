// /*
// Math()

// Math.PI
// math.round()--->nearest integer
// math.floor()---->lower integer
// math.ceil()---->upper integer
// math.trunc()----->removes the decimal part
// math.random()
// math.pow(x,y)
// math.sqrt(x)
// */

// console.log(Math.PI);

// let opt = Math.random()*10000
// console.log(opt);
// //1-6

// console.log(Math.floor(Math.random()*6));

// // Date()

// let date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(Date.now());



// // let start = Date.now();

// // for(let i = 1;i<=10000;i++){
  
// // }

// //   let end = Date.now();

// // console.log(`Execution Time: ${end-start}`);

// function time(){
//     let date = new Date();

//     let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

// console.log(time);
// }

// time()

// setInterval(time,1000)

// console.log("Hello");



let products = [
    {id:1,name:"laptop",price:10000,instock:true},
    {id:2,name:"Mobile",price:20000,instock:false},
    {id:3,name:"Watch",price:5000,instock:true},

]

let cart = [];
function addToCart(id){
    for(let i = 0; i<products.length;i++){
        if(products[i].id === id){
            cart.push(products[i])
            alert("product added successful")
            console.log(cart);
        }
    }
}

function displuProducts(){
    let productList = document.getElementById("productList");


    for(let i =0;i<products.length;i++){
        let product = products[i];

        let stockText = product.instock? "Available": "Out of Stock";
        let stockColor = product.instock ? "text-green-600" : "text-red-600"
        
        productList.innerHTML += `
        <div class="bg-gray-500 p-4 rounded-lg w-46">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <p class="${stockColor}">${stockText}</p>
            <button onclick="addToCart(${product.id})" class="bg-blue-500 px-3 rounded text-white py-1">Add to Cart</button>
        </div>
        `



    
    }
}

displuProducts()


