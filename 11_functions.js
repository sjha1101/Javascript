/*function in js 
function is used to define a block of code that can be reused many times
syntax of function
function name(params) {
    //code
}*/

function OnePlusAvg(x,y){
    return 1 + (x+y)/2
}
let a = 1;
let b = 2;
let c = 3;

console.log("One plus average of a and b is ",OnePlusAvg(a,b))
console.log("One plus average of b and c is ",OnePlusAvg(b,c))
console.log("One plus average of a and c is ",OnePlusAvg(a,c))

//Arrow function
const sum = (p,q) => {
    return p + q
}
console.log(sum(1,2))

//function that doesn't return anything
const print = () => {
    console.log("Hello everyone.")
}

print()

//function that return something
const hi = () => {
   console.log("Hello everyone.")
   return "hi"
}
let v = hi();
console.log(v)
