//pratice set of chapter 2

console.log("Que-1: Use logical operator to find whether the age of a person is lie between 10 and 20.")
const prompt = require("prompt-sync")();
let a = prompt("Enter your age: ")
a = Number.parseInt(a)
if(a > 10 && a < 20){
    console.log("age is between 10 and 20")
}
else{
    console.log("age is not between 10 and 20")
}

console.log("Que-2: Demostrate the use of switch statement in javascript.")

let b = prompt("Enter your age: ")
b = Number.parseInt(b)
switch(b){
    case 10:
        console.log("age is 10")
        break;
    case 11:
        console.log("age is 11")
        break;
    case 12:
        console.log("age is 12")
        break;
    case 13:
        console.log("age is 13")
        break;
    case 14:
        console.log("age is 14")
        break;
    case 15:
        console.log("age is 15")
        break;
    case 16:
        console.log("age is 16")
        break;
    case 17:
        console.log("age is 17")
        break;
    case 18:
        console.log("age is 18")
        break;
    case 19:
        console.log("age is 19")
        break;

    case 20:
        console.log("age is 20")
        break;
    default:
        console.log("age is not between 10 and 20")
        break;
}

console.log("Que-3: Write a js program to find the number is divisble by 2 & 3")
let num = prompt("Enter a number: ")
num = Number.parseInt(num)
if(num%2==0 && num%3==0){
    console.log("Number is divisible by 2 and 3")
}
else{
    console.log("Number is not divisible by 2 and 3")
}

console.log("Que-4: write a js program to find the number is divisble by either 2 or 3")
let nums = prompt("Enter a number: ")
nums = Number.parseInt(nums)
if(nums%2==0 || nums%3==0){
    console.log("Number is divisible by 2 or 3")
}
else{
    console.log("Number is not divisible by 2 or 3")
}

console.log("Que-5: Print \"you can drive\" or \"you can't drive\" based on the age using ternary operator.")
let age = 19 
let f = age >= 18 ? "you can drive" : "you can't drive"
console.log(f)