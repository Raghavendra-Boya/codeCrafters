/*

string.method()
1. length:

2. toUpperCase()
3. toLowerCase()
4. trim()----removes the spaces from beginning and end of the string

5. includes()
6. startsWith("string")

7. replace()----replace first matching text
8. slice()----extracts part of string
9. split()----converst string into array
10. charAt()---return charecter at specific position
11. indexOf()---retun first index of value
12. concat()
13. repeat()
14. padStart()---add charectrs at the beginning of string
*/


let name = "   Rahul    Kumar      "
console.log(name.trim());

let sentence = "JavasScript is Easy"
console.log(sentence.includes("Script"));


let msg = "hello World World"
// console.log(msg.replace("W","S"));
console.log(msg.slice(0,4));
console.log(msg.substring(0,4));

let phone = "987654210"
console.log(phone.slice(-4));

let colors = "red,blue,green";
console.log(colors.split(","));

console.log(msg.charAt(0));
console.log(msg.indexOf("H"));

let email = "exa@gmail.com";
console.log(email.slice(0,email.indexOf('@')));

console.log(phone.repeat(10));

let num = "45";
console.log(num.padStart(3,"0"));