/*
fetch(url)


*/

let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click",()=>{
    let id = document.getElementById("number").value;
let data = fetch(`https://dummyjson.com/products/search?q=${id}`)
data.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data.products);
})
})


let data = fetch(`https://dummyjson.com/products?sortBy=title&order=asc`)
data.then((response)=>{
    return response.json();
})
.then((data1)=>{
    console.log(data1.products);
    for(let i = 0; i<data1.products.length;i++){
        // console.log("Hellooo");
    console.log(data1.products[i].category);
}
})





