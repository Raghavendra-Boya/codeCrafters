/*

map():
map() is an array method used to transform every element of an array 
-map is going to returns a new array
-[1,2,3]---->[1,4,9]

why do we use map():
instead of manual looping and creating a new array, map() make code shaorter and cleaner

syntax:
array.map((element,index,array)=>{
    return modifiedValues;
    })


*/

let products = [
    {id:1,name:"Laptop",price:1000,stock:10},
    {id:2,name:"Mobile",price:2000,stock:0},
    {id:3,name:"Watch",price:3000,stock:5},

]


let products1 = [
    "Laptop",
    "Mobile",
    "Cuat",
    "Watch"

]


let productNames = products.map((product,index,array)=> product.price*0.1
)


console.log(productNames);


/*
Filter():
filter() is used to extract the specific values from an array based on the condition
-return new array
diffrent length for new array and old array

syntax:
array.filter((element,index,array)=>{
    retun condition
    })

*/

let availableProducts = products1.filter(product=> product.includes("a")
)

console.log(availableProducts);

/*
reduce():

reduce() entaire rray into a single value

many values---->single value

syntax:

array.reduce((accumulator,currentValue)=>{
    return accumulator;
    },initialValue)


*/
let prices  = [1000,2000,3000]

let total = products.reduce(
    (sum,product)=>{
        return sum+product.price
    },0
)

console.log(total);

/*
call():

call() is used to barrow a function from another object and exicutes immedietly

when:

when multiple objjects needs the same function

syntax:
functionName.call(objectname,arg1,arg2.....)

*/


let emp1 = {name:"Ravi"}
let emp2 = {name:"Sai"}

function display(city){
    console.log(this.name +" "+ city);
}

display.call(emp1,"Bangalore")
display.call(emp2,"Hyd")

/*
apply():
same as call(), but arg are pased as ana array

syntax:
functionName.apply(object,[arg1,arg2,arg3........])




bind()
: bind() creates new function

-it not executes immediely

let newFunction = functionname.bind(object)
*/

function employee(city,state){
    console.log(this.name+ " " + city,state);
}

employee.apply(emp1,["Bangalore","KA"])


let user  ={
    name: "Rahul",
    disply: function(){
        console.log(this.name);
    }
}

let show = user.disply.bind(user);
show()



/*

whatis event Loop:
event loop is amechanism in JS that allows async operations to work on even though JS is a SIngle threaded



*/