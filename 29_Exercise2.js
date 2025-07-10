/*Exercise 2 – Snake Water Gun
Use JavaScript to create a game of Snake, Water & Gun.
The game should ask you to enter S, W, or G.
The computer should be able to randomly generate S, W, or G and declare win or loss using alert.
Use confirm and prompt wherever required.*/
// Snake Water Gun Game in VS Code (Node.js)

const prompt = require("prompt-sync")();

// Ask user to enter S, W, or G
let user = prompt("Enter S for Snake, W for Water, or G for Gun: ");
user = user.toUpperCase();  // convert to uppercase for safety

// Generate random choice for computer
let choices = ["S", "W", "G"];
let randomIndex = Math.floor(Math.random() * choices.length);
let computer = choices[randomIndex];

console.log(`Computer chose: ${computer}`);
console.log(`You chose: ${user}`);

// Determine winner
if (user === computer) {
    console.log("It's a tie!");
} else if (
    (user === "S" && computer === "W") ||
    (user === "W" && computer === "G") ||
    (user === "G" && computer === "S")
) {
    console.log("You Win!");
} else {
    console.log("Computer Wins!");
}
