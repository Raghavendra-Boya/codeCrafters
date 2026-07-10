/*
What is flow statements:

1. control flow statements
2. loop statements
3. jumping statnments

1. CFD:

flow control staments decde which block of code should execute and in what order based on a execution

start----check condition-----true---if block code---end
                        -----flase--else block code----end

type of control statements:
1. if:
2. if-else:
3. else if ladder:
4. switch:

1. if()
2. if else:
if(condition){
//code
}
else if(condition2{
    //code
    }

*/

// let marks = prompt("enter marks: ");
// if(marks>=35){
//     console.log("pass");
// }
// else{
//     console.log("fail");
// }


// let otp = 1234;
// let userOtp = Number(prompt("Enter OTP:"));
// if(otp === userOtp){
//     console.log("valid otp");
// }
// else{
//     console.log("invalid OTP");
// }


// let temperature = Number(prompt("enter temparature: "));

// if(temperature>40){
//     console.log("Hot");
// }
// else if(temperature>30){
//     console.log("normal");
// }
// else if(temperature>20){
//     console.log("cool");
// }
// else{
//     console.log("too cold");
// }


// let userName = "Raghava";
// let topic = "conditoional Statements"
// console.log("Hello " + userName + "Welcome to JS class " + topic +"if else ladder");
// console.log(`Hello ${userName} welcome to JS class ${topic} if else ladder`);

// let element = document.getElementById("para1").innerHTML=`<a href="#">Heading-1</a>`;
// console.log(element);

// let amount = Number(prompt("Enter Amount:"));
// let totalAmount = document.getElementById("totalAmount")
// let afterDiscount = document.getElementById("afterDiscount")

// let afterDiscountAmount;

// if(amount>=1000 && amount<=2000){
//     let discount = 0.1;
//     afterDiscountAmount = amount*discount;

//     totalAmount.innerText = amount;
//     afterDiscount.innerText = afterDiscountAmount;

// }
// else if(amount>2000 && amount<=3000){
//     let discount = 0.2;
//     afterDiscountAmount = amount*discount;

//     totalAmount.innerText = amount;
//     afterDiscount.innerText = afterDiscountAmount;

// }
// else{
//     let discount = 0.5;
//     afterDiscountAmount = amount-(amount*discount);

//     totalAmount.innerText = amount;
//     afterDiscount.innerText = afterDiscountAmount;

// }

/*
if(flase)
clg("Hello")
clg("Hi")


*/

if(false){
  
console.log("Hello")
}
console.log("Hi");

if([]){
    console.log("A");
}
else{
    console.log("B");
}

// console.log((typeof ));


/*


switch(value/expression){
case 1:
    statements
    break;
case 2:
    statements
    break;

default:
    statements
    break;
}

1use cases:
rolling of diece
-menu selection
-loan application
-role based acces


executions flow:

1. switch expression
2. case values
3. if case is matched with ecp value execute the bloxck of code
4. no case is matched defaul case


*/

let grade = "A";

switch(grade){
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "c":
        console.log("Average");
        break;
    default:
        console.log("fail");
        break;
}

let menu = Number(prompt("choose Item \n1. Burger\n2.Pzza\n3.Pasta"));

switch(menu){

     default:
        console.log("Item not available");
        break;
    case 1:
        console.log(`burder price: 100`);
        break;
    case 2:
        console.log(`Pizza Price: 200`);
        break;
    case 3:
        console.log(`Pasta Price: 99`);
        break;
   
}

/*

for(initialzation;condition;step){
statemenmts
}

execution:
1. initialzation(one time)
2. codition
3. if true statements
4. step
5. condiition
6. statements

4. false out of loop


*/

let array = ["A", "B","c","d"];

for(let i = 0;i<array.length;i++){
    console.log(array[i]);
}

/*
-A
-B
-C
-D

<ul>
li
li
li
li
</ul>

*/


// element.innerHTML = `
// <li>${array[0]}</li>
// <li>${array[1]}</li>
// <li>${array[2]}</li>

// <li>${array[3]}</li>

// `

let element = document.getElementById("list");

for(let i = 0;i<array.length;i++){
   element.innerHTML += `<li>${array[i]}</li>`
}
/*
ul
li B

*/


let products = [
    {name:"laptop",
        price:1000,
        
    },
    {name:"Mobile",
        price:100,
        
    },
    {name:"Watch",
        price:200,
        
    },
    {name:"Tablet",
        price:500,
        
    }
]

let container = document.getElementById("container");

for(let i = 0;i<products.length;i++){
    container.innerHTML += `
    <div class="card">
    <h2>${products[i].name}</h2>
    <p>${products[i].price}</p>
    </div>
    `
}

/*




*/

