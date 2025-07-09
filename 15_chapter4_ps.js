//String pratice set
console.log("Que-1: Write  a program to print console.log(\"Har\".length\") .")

let str = "Har\""
console.log(str.length)

console.log("Que-2: Explore the includes, startsWith, endsWith function of string.")

//includes
const sentence = "THe quickb brown fox jumps over the lazy dog.";
const word = "fox";
console.log(sentence.includes(word));
console.log()

//startsWith
const sen = 'Cats are the best';
console.log(sen.startsWith('Cats'));
console.log(sen.startsWith('cats',0));

//endsWith
const str1 = 'Cats are the best';
console.log(str1.endsWith('best'));
console.log(str1.endsWith('best',17));

const str2 = 'Is this a question?';
console.log(str2.endsWith('question'));

console.log("Que-3: Write a program in js to convert a given string into lowercase.")
let name = "ROHAN"
console.log(name.toLowerCase())

console.log("Que-4: Write a program in js to extract the amount out of the string \"please give Rs 1000.\"")
let str3 = "please give Rs 1000"
let amount = Number.parseInt(str3.slice(15))
console.log(typeof amount)
console.log(amount)

console.log("Que-5: Write a program to change 4th charcter of the given string.")
let str4 = "Surbhi"
str4[4] = "R"
console.log(str)// this will not change the string as it is immutable