console.log("This is var_let_const.js file")
//var
//The value of var can be updated
var a = 45
var a = "hello";
console.log(a)

//let
//The value of let cannot be updated
let b = 45
//let b = "hello"; //Not allowed
b = 100 //Allowed
console.log(b)

//const
//const abc = 45
abc = "hello" //Not allowed
//const abc; //Not allowed

let c = null
console.log(c)
let d = undefined

{
    let b = "this"
    console.log(b)
}

console.log(b)