console.log("This is 05_chapter1_ps.js file")
console.log("Que-1: Create a variable type of string & try to add a number to it.")
let a = "hello"
let b = 2
console.log(a + b)

console.log("Que-2: use typeOf operator to find datatype of the string in the last question.")
console.log(typeof (a + b))

console.log("Que-3: create a const object in javascript can you change it to hold a  number later?")

const a1 = {
    "abc": true,
    "def": false,
    "los":56,
    "rohan": undefined
}
// a1 = 45
// console.log(a1)

console.log("Que-4: Try to add new key to the const object in the problem 3 is it possible to do that?")
//yes
a1['friend'] = "rec"
a1['abc'] = "hello"
console.log(a1)

console.log("Que-5: Write a js program to create a word meaning dictionary of 5 words")
const dict = {
    appreciate:"to show appreciation for something or someone",
ataraxia:"a state of lack of consciousness",
battleroyale:"a game in which players fight against each other"
}
console.log(dict.battleroyale)
console.log(dict['battleroyale'])