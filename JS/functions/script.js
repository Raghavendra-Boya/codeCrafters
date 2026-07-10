/*
What is FUnction:
function is block of code designed to perform a perticular task, when ever we ant reuse the function by calling the function with function nam:


without functions:
-code repetition
2 can'rt resuse
3. complexity and didfficult to maintain the code
4. difficult to debug
consume the time

with functions:
-code reusability
-easy to debug
-easy mintain the code
-better to readability
-less code


E-commerce:
add to cart()
remove Item()
place order()
login()
logout()

ATM:
check balance()
withdraw()
deposit()


syntax:
function functionName(){
//code
}
functionName()


types of functions:
1. function declaration:
function declared using the function keyword
2. function with parameter:
function with parameter is a function that accepts one or more values as input whten the function is callled




*/

let name1 = "Naresh";
console.log("Welcome" + name1);
let name2 = "sai";
console.log("Welcome" + name2);
let name3 = "Kumar";
console.log("Welcome" + name3);


function welcome(name){
    console.log("Welcome " + name);
}

welcome("Rahul");
welcome("Kumar");
welcome("Narem");


function receipe(ingredient){
    console.log(`Step-1: add oil`);
    console.log(`Step-2: add Spices`);
    console.log(`Step-3: add ${ingredient}`);
    console.log(`Step-4: add oil`);

}
receipe("potato")
receipe("panneer")

function login(){
    let status = document.getElementById("status");
    let userName = prompt("Enter User Name:");
    
    if(userName == "admin"){
        status.innerText = `login succesful with cvredentials : ${userName}`
    }
    else{
        status.innerText = `invalid credentials: ${userName}`
       
    }
}



//function with return statement:
//function demo(){
//return //single line code
//}


function add1(a,b){
    console.log(a+b);
}
add1(2,3)
console.log(add1(3,6));

function add(a,b){
    return a+b;
}
// console.log(add(2,3));
let result = add(2,3);
console.log(result);


//anonymous function:
//a function does not have a name is called anonymous function


// function(){
//     //code
// }
//setTimeout(callbackfunction,time in ms)


let f1 = function f2(){
    console.log("welcome");
}
// setInterval(f1,3000)

f1()