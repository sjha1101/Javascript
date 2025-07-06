//Conditional statements
//if else
//if else if
//switch
//need to import prompt-sync
//npm install prompt-sync

//if else
const prompt = require("prompt-sync")();

let a = prompt("Hey, what is your age :");
console.log(typeof a) // string
a = Number.parseInt(a) // converting string to number
if(a < 0){
    console.log("Invalid user");
}

else{
    console.log("valid user");
}

//if else if

let b = prompt("Hey, what is your age :");
console.log(typeof b) // string
b = Number.parseInt(b) // converting string to number
if(b < 0){
    console.log("Invalid age is entered");
}
else if(b >= 18){
    console.log("You are eligible to drive");
}
else{
    console.log("Enter a valid number");
}

//Switch

let c = prompt("Hey, what is your age :");
console.log(typeof c) // string
c = Number.parseInt(c) // converting string to number
switch(c){
    case 18:
        console.log("You are eligible to drive");
        break;
    case 17:
        console.log("You can drive after 1 year");
        break;
    case 16:
        console.log("You can drive after 2 years");
        break;
    case 15:
        console.log("You can drive after 3 years");
        break;
    default:
        console.log("Enter a valid number");
}

//ternary operator

console.log("You can:",(b<18?"not drive":"drive"))