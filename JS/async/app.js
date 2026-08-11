// console.log("Start");
// setTimeout(function() {
//     console.log("Learning Async Methods");
// },2000);
// console.log("End");


// console.log("Order PLaced");
// setTimeout(function() {
//     console.log("Order is being processed");
// },3000);
// setTimeout(function() {
//     console.log("Order is being packed");
// },5000);
// setTimeout(function() {
//     console.log("Order is being shipped");
// },7000);
// setTimeout(function() {
//     console.log("Order is delivered");
// },10000);
// console.log("You can track your Order");


/*
Feature:                       Sync                     Ansync
Execution:                     Sequential               Non-Sequential
waiting:                      Yes                       No
speed:                        Slow                      Fast
UI Experience:                  Poor                      Good
best for:                       Small Task               Large Task
examples:                       Login, Payment, etc.        API Calls, File Uploads, etc.


1. setTimeout() - It is used to execute a function after a specified number of milliseconds.
2. setInterval() - It is used to execute a function repeatedly after a specified number of milliseconds.
3. callback - It is a function that is passed as an argument to another function and is executed after the completion of that function.
    why callbacks:
    -some tasks take time to complete, such as fetching data from a server or reading a file. In such cases, we can use callbacks to ensure that the code that depends on the result of the task is executed only after the task is completed.
    -we nned to wait for completion of a task before executing the next task. In such cases, we can use callbacks to ensure that the code is executed in the correct order.





*/

// function greet(callback){
//     console.log("Hello SStudents");
//     callback();
// }
// greet(function() {
//     console.log("Welcome to the class");
// })


// console.log("AFter");




getStudent(1,function() {
    console.log("Student Data Received");
})

console.log("Hello AIT");


console.log("first-line");

getStudent(1,(student)=>{
    console.log("Student Data Received");
    console.log(student);
    getSubjects(student.id,(subjects)=>{
        console.log("Subjects Received");
        console.log(subjects);
        getMarks(subjects[0],(marks)=>{
            console.log("Marks Received");
            console.log(marks);
        })
    })
})


console.log("Last-line");


function getStudent(id,callback){
    setTimeout(()=>{
        console.log("Getting STudent Data from Database");
        callback({name:"Anil",age:20,id:id});
    },2000);
}

function getSubjects(id,callback){
    setTimeout(()=>{
        console.log("Getting Subjects of Student ID:" + id);
        callback(["Maths","Science","English"]);
    },2000);
}

function getMarks(subject,callback){
    setTimeout(()=>{
        console.log("Getting Marks of Subject: " + subject);
        callback(90);
    },2000);
}