//Array is used to store multiple values in a single variable array are object the typeof operator or array returns objects
let marks_class_12 = [90,60,50,40,null,"Not present"]
console.log(marks_class_12)

//accessing each element
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6]) //op will be undefined as index 6 is not present in the array

//length of an array
console.log("The length of an array is ",marks_class_12.length)

//adding new value to an array
marks_class_12[6] = 45
console.log(marks_class_12)

//changing existing value array are mutable
marks_class_12[0] = 100
console.log(marks_class_12)

console.log(typeof marks_class_12)

//QuickQuiz: Try to print array using for loop
let arr = [1,2,3,4,5]
for (let i = 0; i < arr.length;i++){
    console.log(arr[i]);
}