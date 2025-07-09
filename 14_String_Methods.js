// String method original string will never get changed only a new string will be returned

let name = "Surbhi";
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(0,4));
console.log(name.slice(4));
console.log(name.replace("S","a"));

let friend = "Ravi";
console.log(name.concat(" is friend of ", friend," Ok."));

let friend2 = "  Rohit  ";
console.log(friend2)
console.log(friend2.trim());
 
//string is immutable
let fr = "Surbhi" + " " + "Ravi" + " " + "Rohit" + " " + "Vaibhav";
console.log(fr[0]);
console.log(fr[1]); 
console.log(fr[2]);
console.log(fr[3]);
console.log(fr);
//fr[0] = "A"; //This will generate error as string is immutable

//QuickQuiz: use a for loop to print the string
let name2 = "Surbhi";
for (let i = 0; i <= name2.length;i++){
    console.log(name2[i]);
}