//map,filter,reduce is used to iterate over the array it is an higher method array order it is modern javascript method
/*map
Map is used to create a new array by performing some operaation on each element array element.
const a = [1,2,3]
a.map((value,index,array)=>{
    return value * value;
})
*/
let arr = [12,23,24,1]
let a = arr.map((value,index)=>{
    console.log(value,index)
    return value + 1
})
console.log(a)

//Array filter method is used to filter an array with values that passes a test.Creates a new array it will not change the existing array.
let arr2 = [12,13,53,2,34,5]
let a2 = arr2.filter((a)=>{
    return a<10
})
console.log(a2)

//reduce is used to reduce an array to a single value. is used to add first element to second element & after that the output will be again add to the first
//first method
let arr3 = [1,2,3,4,5]
let a3 = arr3.reduce((a,b)=>{
    return a+b
})
console.log(a3)

//second method
let arr4 = [1,2,3,4,5]
const reduce_func = (a,b)=>{
    return a+b
}
let new_arr = arr4.reduce(reduce_func)
console.log(new_arr)
