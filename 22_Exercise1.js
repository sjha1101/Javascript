/* Exercise 1 – Guess the number
Write a JavaScript program to generate a random number and store it in a variable. The program then takes an input from the user to tell them whether the guess was correct, greater or lesser than the original number.
100 - (number of guesses) is the score of the user.
The program is expected to terminate once the number is guessed. Number should be between 1 – 100.*/

const prompt = require("prompt-sync")();
let randomNumber = Math.floor(Math.random() * 100) + 1;

let guess;
let attempts = 0;

console.log("Welcome to the Guess the Number Game!");
do {
    guess = Number.parseInt(prompt("Enter your guess (between 1 and 100): "));
    attempts++;

    if (guess > randomNumber) {
        console.log("Your guess is too high!");
    } else if (guess < randomNumber) {
        console.log("Your guess is too low!");
    } else {
        console.log(`Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempts.`);
        let score = 100 - attempts;
        console.log(`Your score is: ${score}`);
    }
} while (guess !== randomNumber);
