/**
    for in loop:
    for in used to iterate over the keys if ann object


    [1,2,3,4,5]------>0,1,2,3,4
    {key1:valu1,key2:value2,key3:value3}------>key1,key2,key3

    syntax:
    for(let key in object){
    //code
    }

    for(init;condition;step){
    //code
    }
 */


    let arr = [1,2,3,4,5];
    arr.splice(2,1)
    console.log(arr);
    //[1,2,4,5]
    console.log(arr[3]);
    for(let i = 0;i<arr.length;i++){
        console.log(arr[i]);
    }

let student = {
    id:102,
    name:"ravi",
    email:"ravi@gmail.com",
    course:"java"
}


for(let key in student){
    console.log(key, student[key]);
}


/*
for of loop:
used to iterate over values of iterable objects like arrays, strings

for(let value in arraYName){
//code
}





*/

let fruits = ["Apple","Mango","Orange"]

for(let value of fruits){
    console.log(value);
}

/*
forEach()
a bilt-in array method used to iterate through the array elements

array.forEach(function(value,index){})


*/

fruits.forEach(function(fruit,index){
    console.log(`${index} : ${fruit}` );
})


/*
spread operator:
spread operator expands the elemenst from an array or object


why:
...


*/

let arr1 = [1,2,3,4];
let arr2 = [...arr1];
console.log(...arr1);
console.log(arr2);
let cart = ["Mobile","laptop"]
let newCart = ["PC","Watch"]

let totalCart = {...cart}
console.log(totalCart);

console.log({...student});
// let copy = [...student]
// copy.loc = "Hyd";
// console.log(copy);
console.log(student);

/*

rest parameter:
collects multiple values into a single array

function demo(...name){
}

*/

function total(sum,...data){

    for(let value of data){
        sum +=value;

    }
    console.log(sum);
}


total(10,1,2,3)




let arr3 = [{name:"laptop1",price:1000},
    {name:"laptop2",price:2000},
    {name:"laptop3",price:3000}
]

function cart4(...products){
let sum = 0;
    products.forEach((value)=>{
        sum += value.price;
    })
    console.log(sum);
}

cart4({name:"laptop1",price:1000}, {name:"laptop2",price:2000}, {name:"laptop3",price:3000})


/*
Destructuring:
extarcting values from array or object and storing into varlobles
let [a,b,c] = arrayName;

*/


let colors = ["Red","Green","Blue"]

let [c1,c2,c3] = colors;
console.log(c1);

let {id,name,email,course} = student;
console.log(email);