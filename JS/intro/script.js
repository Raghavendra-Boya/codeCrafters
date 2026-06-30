var num = 10;
//varType variableName(idenfierName) = value;

/* 
types of vatiable:
    1. var
    2. let
    3. const

    function functionName(){
    //code
    }
    1. var: 
    scope: functional scope
    we can able to re-declaration and re-initialization(re-assignment)
    wdelaclaratopn can be hoisted and assigned with undefined


    var a;//declaration
    a = 20;//initialization
    a = 30//re-initialization
    var a = 40;//re-declaration


    2. let:
    scope: block scope

    hoisting will happend but not assigned with undefined
*/

function greet(){
    var a = 100;
    console.log(a);
    //  console.log(a);
    // document.write(a+"<br>");
    //  document.write(a)
}
greet()

// console.log(a);
 var b = 200;
if(true){
   
    console.log(b);
}

console.log(b);
var b = 300;
console.log(b);
b = 400;
console.log(b);


var c;
console.log(c);
// console.log(d);

console.log(e);
var e = 500;


var e;//undefined
console.log(e);
e = 500;


 let aa = "ramesh";
if(true){
   
    
    let aa = "mahesh";
    console.log(aa);

    // let aa;
    // console.log(aa);
    // aa = "mahesh"
}
console.log(aa);

aa = "kumar";


{
    const bb= 2000;
}
// console.log(bb);

let q = 1000;
{
    console.log(q);//1000
    let q = 200;
    {
        console.log(q);//1000
        {
            let q = 3000;
            {
                let q = 4000;
                {
                    console.log(q);//4000
                }
                console.log(q);//
            }
        }
    }
}