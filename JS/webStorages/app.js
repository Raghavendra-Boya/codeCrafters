/*
what is Web Storage:
1. local storage
2. session storage

setItem()----store the data inside the browser
getItem()
removeItem("Key")
clear()
key()

localStorage.setItem("key","value")

*/

localStorage.setItem("ID",101);
localStorage.setItem("ID",109);
console.log(typeof localStorage.getItem("ID"));


function svaeName(){
    let userName = document.getElementById("username").value; 
    localStorage.setItem("UserName",userName)
}

function getName(){
  
    document.getElementById("name").innerText =   localStorage.getItem("UserName");
    alert("Name getted successfully")
}
function removeName(){
    localStorage.clear()
}


let student = {
    name:"ravi",
    age:22,
    course:"JAVA"
}

localStorage.setItem("student",JSON.stringify(student))
console.log(JSON.parse(localStorage.getItem("student")));
console.log(student);


let array = [1,2,3,4,5]
localStorage.setItem("array",JSON.stringify(array))
console.log(localStorage.getItem("array"));
console.log(JSON.parse(localStorage.getItem("array")));


function darkMode(){
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    localStorage.setItem("theme","dark")

}

function lightMode(){
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    localStorage.setItem("theme","light")

}

let savedTheme = localStorage.getItem("theme");

if(savedTheme == "dark"){
     document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
}