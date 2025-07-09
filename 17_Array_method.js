//Array methods is used to perform operations on arrays
let num = [1,2,3,4,5]
//tostring is used to convert array to string
let b = num.toString()
console.log(b)
console.log(typeof b)

//join is used to convert array to string
let c = num.join(" and ")
console.log(c)
console.log(typeof c)

//pop is used to remove last element from an array
let r = num.pop()
console.log(num,r) // show the removed element

//push is used to add element to an array
let a = num.push(6)
console.log(num,a)

//shift is used remove first element from an array
let d = num.shift()
console.log(num,d)

//unshift is used to add element to an array
let e = num.unshift(10)
console.log(num,e)