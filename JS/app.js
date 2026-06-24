function recipe(ingredient,iterations){
    console.log(`step-1: add oil <br> Step-2: add spices <br> step-3 add ${ingredient} <br> step-4: cook for 20min`);
    for(let i = 0;i<iterations;i++){
        console.log(i);
    }
}



let element = document.getElementById("element");

element.style.color = "red"


function rating(starNumber){
    for(let i = 1;i<=5;i++){
        document.getElementById("s"+i).style.color= "gray"
    }
    for(let i = 1;i<=starNumber;i++){
    let star = document.getElementById("s"+i);
    star.style.color = "gold";
}
}


console.log("Heloooooooooo");

let stock = [

    {name:"Mobile",inStock:true},
    {name:"laptop",inStock:true}
]

let container = document.getElementById("container");

for(let i =0;i<stock.length;i++){
    if(stock[i].inStock){
        container.innerText = "Available";
        container.style.color = "green"
    }
    else{
        container.innerText = "out of Stock";
        container.style.color = "red"
    }
}