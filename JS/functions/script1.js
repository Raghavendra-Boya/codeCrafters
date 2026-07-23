function receipe(ingredient="hello",ingredient1){
    console.log(`Step-1: add oil`);
    console.log(`Step-2: add Spices`);
    console.log(`Step-3: add ${ingredient1}`);
    console.log(`Step-4: add oil`);

}
receipe()
receipe("potota")

/*
call back function:
a call back function is a function that is paased as an argument to another function and is eecute after the first function is completed

function first(callback){
clg(",main function")
callback()
}

function second(){
    clg("callback function")
}

first(second)


let f2 = function f1(){
colg("Hello")
}


*/

function greet(name,callback){
    
    console.log("Hello" + name);
    callback();
    
}

function message(){
    console.log("Welcome to JS");
}

greet("Rahul",message)


function pay(){
   let amount =  Number(document.getElementById("amount").value);
  if(amount>0){
    console.log(`amount recieved ${amount} successfully`);
    greet1(parocessPayment)
  }
}

function greet1(callback){
callback()
}


function parocessPayment(){
    console.log("Thank you visit again...");
}

/*
self invioking function(IIFE) executes automatically as soon as its created

(function(){})();

*/

(function(){
    document.body.style.backgroundColor = "yellow";
})();


/*
arrow function:
arrow function is a shoeter way to write the functions introduced in ES6

let funcrioName = ()=>{}

*/
// f3(100);
let f3 = (price,a) => {
    console.log("I am Arrow function" +price)
}

message1()
function message1(){
    console.log("Welcome to JS");
}
/*

Student Result Management System
Scenario

A school wants a simple application to calculate a student's result.

Requirements

Create an application with the following input fields.

Student Name
Roll Number
HTML Marks
CSS Marks
JavaScript Marks

Add one button.

When the button is clicked,

Validate that every field is filled.
Marks should be between 0 and 100.
Calculate Total Marks.
Calculate Percentage.
Display Grade

Example

90-100 -> A+
80-89  -> A
70-79  -> B
60-69  -> C
50-59  -> D
Below 50 -> Fail

Display

Student Name
Roll Number
Total
Percentage
Grade
Result (Pass/Fail)

Extra Challenge

Store every student's result.
Display all students in a table.
Show Total Students.
Show Number of Passed Students.
Show Number of Failed Students.

*/

