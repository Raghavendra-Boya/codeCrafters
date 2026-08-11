
var name = "Hello";

let person = {
    name: "John",
    age: 30,
    greet: function(name) {
        console.log("Hello, my name is " +this. name);
    }
}

person.greet(); // This will throw an error because 'name' is not defined in the greet function's scope.

let person2 = {
    name: "Jane",
    age: 25,
    greet: person.greet
}
console.log(person2.greet);
person2.greet(); // This will correctly log "Hello, my name is Jane" because 'this' refers to the person2 object.


var a = 20;
console.log(window.a);
console.log(this.a);
console.log(a);


let student = {
    name:"Anil",
    age: 20,
    show: function(){
        var name = "Raya"
        let greet =  ()=>{
        console.log("Hello, my name is " + name);
    }
    greet()
    }
}

let student2 = {
    name:"Sunil",
    age: 25,
    show: student.show
}

let student3 = {
    name:"Ramesh",
    age: 30,
    show: student.show
}


student.show();
student2.show();
student3.show();
