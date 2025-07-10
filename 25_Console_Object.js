//Console Object in js
//console
console.log(console)
console.log("Hi Surbhi")
//error to show an error
console.error("This is an error.")
//assert to check the condition
console.assert(2 == 3,"2 is not equal to 3.")
//clear is used to clear the console
console.clear()
//table is used to print table
obj = {a:1,b:2,c:3}
console.table(obj)
//warn is used to print warning
console.warn("This is a warning.")
//info is used to print info
console.info("This is a info.")
//time is used to print time of execution
console.time("p1")
console.timeEnd("p1")

console.time("forLoop")
for(let i = 0;i<5;i++){
    console.log(233)
}
console.timeEnd("forLoop")

console.time("whileLoop")
let i = 0
while(i<5){
    console.log(233)
    i++
}
console.timeEnd("whileLoop")