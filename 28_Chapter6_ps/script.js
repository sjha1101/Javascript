//pratice set of chapter 6
console.log("Que-1:Write a program using prompt function to take input of age as a value from the user & use alert to tell him if he can drive. ")
console.log("Que-2: In que 1 use the user to ask if he wants to see prompt again?")
console.log("Que-3: Write a program to use console.error to log the error if the age entered is negative.")
let runAgain = true;

const canDrive = (age) => {
    return age >= 18 ? true : false;
};
while(runAgain){
let age = prompt("Enter your age: ");
age = Number.parseInt(age);
if(age<0){
    console.error("Invalid age is entered");
    break;
}
if (canDrive(age)) {
    alert("You can drive")
} else {
    alert("You can't drive")
}
runAgain = confirm("Do you want to run again?")
}

console.log("Que-4: Write a program to change the url to google.com (Redirection) if user enters number greater than 4.")
let num = prompt("Enter a number: ")
num = Number.parseInt(num)
if(num>4){
    location.href = "https://www.google.com/"
}

console.log("Que-5: Write a program to change the page background color to yellow, red or any color based on user input through prompt.")
let color = prompt("Enter a color: ")
document.body.style.backgroundColor = color