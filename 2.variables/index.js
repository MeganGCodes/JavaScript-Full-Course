// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

//Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

//let is what you can put strings in and numbers and booleans
let firstName = "Megan"; //strings
let age = 21; //numbers
let student = true; //booleans
//the console log lets you fine errors easy
console.log("Hello", firstName);
console.log("you are",age, "years old");
console.log("Enrolled:", student);
//you need to make paragraph tags if you need to change the inner html
//of these paragraph tags you can do it useing document.getElementById
document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;
console.log(`Hi my name is ${firstName} and i am ${age}`)