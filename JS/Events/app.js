/*
What i Event:


Real WOrld Use Cases:
1. clicking the login button
2. typing search box
3. scrolling thriugh inst
4. 

why do we use EVents:


way to apply EVents:
1. Inline Event Handler:
JS is written directly inside the HTML element using on Attribute

<button onclick="JS code">Login</button>

2. EVen Property:
assign an event directly from the JS

button.onclick = function (){}

3. addEventListener();
attaching one or more event handlers

element.addEventListener("eventName",function(){})



type of events:
1. mouse events:
click:
dblclick
mouseover

*/

let btn = document.getElementById("btn");
// btn.onclick = function(){
//     console.log("Button clicked form the JS");
// }
// btn.onclick= function(){
//     console.log("Button clicked form the JS file");
// }

btn.addEventListener("click",function(){
    console.log("Button clicked form the JS");
})

btn.addEventListener("click",function(){
    console.log("Button clicked form the JS file");
})

btn.addEventListener("mouseover",function(){
    btn.style.backgroundColor = "yellow";
})
btn.addEventListener("mouseout",function(){
    btn.style.backgroundColor = "";
})
btn.addEventListener("mousemove",function(){
    console.log("Hello");
})

let input = document.getElementById("input");
input.addEventListener("keyup",function(e){
    console.log("Key Down");
    console.log(e.key);

})

/**
 form events:

 input,textarea,slect,form

 focus:
 trigger when the user clics into an input field



 */


 let user = document.getElementById("username");
 let msg = document.getElementById("msg");

 user.addEventListener("focus",function(){
    user.style.border = "2px solid red";
    msg.innerText = "Enter Your Register emeil"
 })

let course = document.getElementById("course");

  course.addEventListener("change",function(){
    document.getElementById("selected").innerHTML = "you selected <b> "+ course.value +"</b>"
 })

 let form = document.getElementById("login");

 form.addEventListener("submit",function(e){
    e.preventDefault()
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
let status = document.getElementById("status");

if(user == "" || pass==""){
    status.innerText = "All fiealds are required"
}
else{
    status.innerText= "Login Successful"
}

 })


  /*
  windows Events:

  -page load
  resize
  croll
  close page

  1. load
  
  
  
  */

  window.addEventListener("load",function(){
let status = document.getElementById("status");
status.innerText ="Welcom back"
  })

  window.addEventListener("resize",function(){
    console.log("Window size changed");
  })

  /*
  clipboard events:
  
  */

  let question = document.getElementById("question");

  question.addEventListener("paste",function(e){
    e.preventDefault();
    document.getElementById("msg1").innerText = "Copy disabled"
  })