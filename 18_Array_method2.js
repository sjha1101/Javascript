let num = [1,2,3,4,5,6,7,8]
console.log(num.length)

//Delete 
delete num[0]
console.log(num)
console.log(num.length)

//concat in array is used for merging the array return new array does not change the existing array
let a = [1,2,3]
let b = [4,5,6]
let d = [7,8,9]
let c = a.concat(b)
console.log(c)
let e = a.concat(b,d)
console.log(e)
console.log(a,b,d)

//imp que in interview
//sort in js is used to sort the array in ascending order original array will change after sorting
let f = [800,100,2123,643,445,9453]
f.sort()
console.log(f)

//compare is used to sort the array as per the requirement assending or descending
let compare = (a,b) => {
    return a-b
}
f.sort(compare)
console.log(f)

//Reverse in js is used to reverse the array
let g = [1,2,3,4,5]
g.reverse()
console.log(g)

//Splice in js is used to remove the element & add new element on the same place in the array
let h = [551,22,3,14,5,6,7,8,229]
h.splice(2,3,1021,1022,1023,1024,1025)
console.log(h)
let deleteValues = h.splice(2,3,1021,1022,1023,1024,1025)
console.log(h)
console.log(typeof deleteValues)

//Slice is used to create a new array from the existing array
let i = [1,2,3,4,5,6,7,8]
let newi = i.slice(2,5) //5 will not be included
console.log(newi)