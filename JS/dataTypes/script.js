/*
What is DAta type: 
data type defines thet type of dvalue that variable can hold,

two types: 
1. primitive
2. non-primitive

1. Primittive data types: 

    -Number: represents the numeric values, both integer and float numbers
    Real time use cases: 
    1. AGE: 
    2. mobile
    3. emplo ID
    4. Scrore
    5. temperature

    typeof()----->dat

    -String: reprent the sequence of charecters whi are enclosed b/w the double or single quotes
    Real time use cas:
    1. name
    2. department
    3. address
    4. email

    -Boolean: represents logical values, either true ot flase

    use cases:
    - toss
    - is LoggedIn
    - attendance
    - pass/fail
    - hasSubscription
    - climate

    -null: represents the absence of value

    use cases:
    - optional fiealds


    -undefined: represent the variable can declared but not assigned any value

    real time use cases:
    - unintialization
    -

    -bigInt:


2. non-primitive dat types:
we acan able to store multipkle values in sigle varoiable and can able to change the value in same memory

-object: reprents the collection od key-value paires.

use cases:
-product detai;ls:
2. user profiles

syntax:

varType objectName = {
    key1:value1,
    key2:value2,
    key3:value3
}

-Array: reprents the an oredered list of values(heteogenious data)
syntax:
varType arrayName = [value1,value2,valu3.....]

use cases:
ecommerce

*/

var age = 50;//m-1
console.log(age);
var age = 34;//m-2
console.log(typeof typeof age);


let name = "Ramesh";
console.log(name);
console.log(typeof name);

let isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);

let emptyValue = null;
console.log(emptyValue);
console.log(typeof emptyValue);


let notAssigned;
console.log(notAssigned);
console.log(typeof notAssigned);


let bigNumber = 123456789012345678900n;
console.log(bigNumber);
console.log(typeof bigNumber);

let student1 = {
    name:"kumar",
    age:20,
    fee:10000,
    course:"JFS"
}

console.log(student1);
console.log(typeof student1);
//dot notation
//objectname.key
console.log(student1[age]);

let studentsData = [{name:"rahul",age:21},{name:"kumar",age:34},{name:"balaji",age:25},"String",true,100000,[1,2,3,4]]
console.log(studentsData);
console.log(typeof studentsData);

//index----0
console.log(studentsData[6][2]);