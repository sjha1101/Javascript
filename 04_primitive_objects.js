//NNSSBBU //Null,Number,String,Symbol,BigInt,Boolean,Undefined (primitives in js)
console.log("This is 04_primitive_objects.js file")
let a = null;
let b = 45;
let c = true;
let d = BigInt(45) + BigInt(45);
let e = "hello";
let f = Symbol("hello");
let g = undefined;
let h 
console.log(a,b,c,d,e,f,g,h)  
console.log(typeof d)

//Non-primitive datatype - object in js
// object is used to store key value pair
const item = {
    "abc": true,
    "def": false,
    "los":56,
    "rohan": undefined
}
console.log(item["abc"])
console.log(item.abc)
console.log(item.def)
console.log(item.los)
console.log(item.rohan)