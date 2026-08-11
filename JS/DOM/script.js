/*
DOM:

1. DOM Selectors:
    1. getElementByID()----selects one element by using ID
    2. getELementsByClassName()---selects multiple elements using class name

    3. getElementsByTagName()---selects elements using tag name
    4. querySelector(types selector)
    5. querySelectorAll()---selects all matching elements

2. DOM manipulation
    1. innerText:change text content
    2. innerHTML: changes entaire HTML inside element
    3. style manipulation: changes style dynamically



    Class Manipulation:
    classList.toggle()


    
    */


let para = document.getElementsByClassName("para");
console.log(para);

for(let i = 0; i<para.length;i++){
    para[i].style.color = "orange";
}

function changeFirst(){
    let fistBox = document.querySelectorAll(".btn");
    console.log(fistBox);
}


function darkMode(){
    let card = document.getElementById("body");
    card.style.backgroundColor = "black";
    card.style.color = "white"
}


function activate(){
    document.getElementById("box").classList.contains("toggle1")
}

function changeImage(){
    document.getElementById("image").src="https://picsum.photos/300"
}


let h1  = document.createElement("h1");

h1.innerText = "Heading tag is created in JS"

document.appendChild(h1);