//for_loop
//syntax of for loop
/*for(initialization; condition; increment/decrement){
    //code
}*/
//program to find sum of the natural number
const prompt = require("prompt-sync")();
let sum = 0
let n = prompt("Enter a number:")
n= Number.parseInt(n)
for(let i = 0; i < n; i++){
 sum+=(i+1)
}
console.log("sum of first " + n +  "natural number is: " +sum )

//program to print first 5 number
for(let i = 1;i<=5;i++){
    console.log(i);
}

//for-in loop
let obj ={
    surbhi:12,
    ravi:14,
    sejal:13
}
for (a in obj){
    console.log("Marks of "+ a +" is " +obj[a])
}

//for-in loop (print one by one charcater of string)
for(let b of "abcdef"){
    console.log(b)
}