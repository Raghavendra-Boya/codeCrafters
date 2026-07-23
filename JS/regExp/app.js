/*
Reg Exp:
RegEx is a sequence of charecters that defines a search pattern


1. literals:

let variableName = /abc/
2. RegEx Constructor:

let variableName = new RegExp("abc")


1. caret(^)---beginning of the String

use case:
-user name start s with letter
-employee ID should starts with "EMP"
-roll number should starts with the college code

2. Dollor($)----matches the end of the string

use cases:
-email should ends with .com
-image .png
-files end with .pdf

3. DOt(.)----matches exactly one charecter except new line

why: when any sigle charecter is allowed at specific position

use cases:

4. Asterisk(*)--matches previous charecter zero or more times

-optional middle name
-optional country code

5. plus(+)---matches the previous charecter one or more times

6. Question mark(?)----matches the previous charecter zero or one time


 */


let caret = /^EMP/

console.log(caret.test("EMP011111"));
console.log(caret.test("dabc"));


let dollor = /abc$/

console.log(dollor.test("abcdef"));
console.log(dollor.test("abcdefarbc"));

let dot = /a.c/

console.log(dot.test("abc"));
console.log(dot.test("axc"));
console.log(dot.test("ac"));
console.log(dot.test("abbc"));
console.log(dot.test("a@c"));
console.log(dot.test("a\nc"));


let asterisk = /go*gle/

console.log(asterisk.test("ggle"));
console.log(asterisk.test("gogle"));
console.log(asterisk.test("google"));
console.log(asterisk.test("gooogle"));
console.log(asterisk.test("ggooooggleg"));

let plus = /go+gle/

console.log(plus.test("ggle"));
console.log(plus.test("gogle"));
console.log(plus.test("google"));
console.log(plus.test("gooogle"));
console.log(plus.test("ggooooggleg"));


let question = /colou?r/
console.log(question.test("color"));
console.log(question.test("colour"));
console.log(question.test("colouur"));


//Charecter Set([])---matches any one charecter from the given set

let charset = /[^a-c]/
console.log(charset.test("111a"));
console.log(charset.test("dog"));
console.log(charset.test("cab"))

//negated Charset([^ ])-----maches any charecter except the specifies charecters

//range(-)
//digit(\d)---matches any digit (0-9)
//Non-Digit(\D)---matches any charecter except digits

console.log(/\D/.test("123"));
console.log(/\D/.test("abc"));
console.log(/\D/.test("12a"));

//space(\s)----matches spaces,tabs,new line

console.log(/\S/.test("Hello world"));
console.log(/\S/.test("Hello"));
console.log(/\s/.test("Helloworld "));
console.log(/\s/.test("\t"));
console.log(/\s/.test("\n"));
console.log(/\s/.test("Hello world"));

//non-whitespace(\S)----matche every charecter except whitespace

//word(\w)---matches letters,digits,underscore
//non-word charecter(\W)---,atches any charecter excepts letter, number, underscore
//Quantifiers({n}{n,}{n,m})---specify how many time a charecter should appae

``



