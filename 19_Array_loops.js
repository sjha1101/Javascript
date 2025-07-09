//loop in array is used to iterate over the array
//for loop
let num = [3,54,1,2,4]
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

//foreach loop
num.forEach(element => {
   console.log(element * element) 
});

//Array.from is used to convert string to array
let name = "Surbhi"
let arr = Array.from(name)
console.log(arr)

//for...of is used give the element of an array
for(let i of num){
    console.log(i)
}

//for...in is used to give the key of an array
for (let i in num){
    console.log(num[i])
}