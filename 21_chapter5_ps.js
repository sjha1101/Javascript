//pratice set of array
const prompt = require("prompt-sync")();
console.log("Que-1: Create an array of numbers & take input from the user to add this numbers to the array")
let arr = [1,2,3,4,5]
let a = parseInt(prompt("Enter a number: "))
arr.push(a)
console.log(arr)

// const prompt = require("prompt-sync")();
console.log("Que-2: Keep adding numbers to the array in 1 until the 0 is added to the array.")
let arr2 = [1,2,3,4,5,6,7]
let a2 ;
do{
    a2 = prompt("Enter a number:")
    a2 = Number.parseInt(a2)
    arr2.push(a2)
}while(a2 != 0)
    console.log(arr2)

console.log("Que-3: filter for the number is divisibe by 10 from given array")
let arr3 = [12,23,24,1,13,14,15,16,17,18,19,20,10]
let n = arr3.filter((x)=>{
    return x%10 == 0
})
console.log(n)

console.log("Que-4: Create an array of square of the given number.")
let arr4 = [12,23,24,1,13,14,15,16,17,18,19,20,10]
let n4 = arr4.map((x)=>{
    return x * x
})
console.log(n4)

console.log("Que-5: Use reduce to calculate fatorial of a given number from an array of first an array of first n natural numbers(n bring the number whose factorial needs to be calculated.")
let arr5 = [1,2,3,4,5,6,7,8,9,10]
let n5 = arr5.reduce((a,b)=>{
    return a*b
})
console.log(n5)