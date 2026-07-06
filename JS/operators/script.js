/*
WHat is operator:
a operator is a special sign or keywords which are used to perform the operation betwenn operands

value1 operator value2

why:
1. calucations
2. compare the values
3. check the condition
4. assign values
5. make decitions
6. logical operation


types of operators in JS:
1. artithmetic operators:
+,-,*,/,%,**
*/

console.log(100/5);
console.log(100%5);
console.log(2**3);

/*
2. assignment operator:a
assignment opetrators assign a values to variables

=,+=,-=,*=,/=,%=,**=

use cases:
1. cart item total price
2. bank
3. games

*/


let score = 0;
score += 6;//score = scrore+6
score +=4;
 


/*
3. comparision operators:
compare the two values and always return the true or false(boolean values)

==,===,>,<,>=,<=,!=,!==

==(loose equals)---check values
===(strict equals)----value & data type
!=----only values(not matches it retun value as true)

*/

console.log(5!=="5");

/*
Logical Operators:
logical operator combines the multiple operattions

&&----both value true the return true
||
!

condition1 && condition2


*/

console.log(10>15 || 10<5);

console.log(true && false || true && !false);

/*
5.terNARY OPERATOR:
IT IS A SHORTHAND FORM a if-else

    let result = condition ? expressionIfTrue:expressionIfFalse

*/

let marks = 23;
let result = (marks>=35)? "pass" :"fail";
console.log(result);

let a1 = 20;
let b1 = 5;

let result1 = a1>b1 ? a1<15 ? "between 5 -15" : "above 15" : "below15";

//Unary operator:
// +,-,++,--,typeof

//+----
// //++ increment
//     1. post increament(value++)---it will prints the value the later it will increase the value

//     2. pre  increament(++value)---fisrt it will increase the value later it will print value

//--(decreament)

console.log(+true);

console.log(a1++);//20---a1=21
console.log(++a1);//22---a1=22
a1++;//22---23
++a1;//24
--a1;//23
a1;//23
console.log(a1);//22
console.log(++a1);//23---a1=23
console.log(a1--);//23----a1=22
console.log(--a1);//21
console.log(a1);//21


console.log(2-"five"+3);
console.log(5*"two");

console.log(typeof NaN);
console.log(NaN === NaN);


let number = Number(prompt("ENter a NUmber"));

console.log("after prompt");
console.log(typeof number);
let num = Boolean(-10);
console.log(num);