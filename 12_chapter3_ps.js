//pratice set of loop & functions

console.log("Que-1: Write a program to print the marks of a student in an using object using for loop obj ={harry:98,rohan:120,vaibhav:45} ")

let marks = {
    harry:98,
    rohan:120,
    vaibhav:45
}
//for loop
for(let i = 0;i<Object.keys(marks).length;i++){
    console.log("Marks of "+ Object.keys(marks)[i] +" is " +marks[Object.keys(marks)[i]])
}

console.log("Que-2: Write a program to print the marks of a student in an using object using for-in loop")
//for-in loop
for (let key in marks){
    console.log("Marks of "+ key +" is " +marks[key])
}

console.log("Que-3: write a program to pring \"try again\" until the user enter the correct number.")
const prompt = require("prompt-sync")();
let cn = 2
let i 

while(i != cn){
    i = prompt("Enter a number: ")
    console.log("try again")
}
    console.log("you entered correct number")


console.log("Que-4: Write a fuction to find mean of 5 numbers")

const mean = (a,b,c,d,e) => {
    return(a+b+c+d+e)/5
}

console.log(mean(1,2,3,4,5))