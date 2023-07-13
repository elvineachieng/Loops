/*while (condition) {
 // code that gets executed as long as the condition is true
}*/
let i = 0;
while (i < 10) {
 console.log(i);
 i++;
}
let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;
while (notFound && someArray.length > 0) {
 if (someArray[0] === "Louiza") {
 console.log("Found her!");
 notFound = false;
 } else {
 someArray.shift();
 }
}
let nr1=0;
let nr2=2;
let temp;
let fibonacciArray = [];
while(fibonacciArray.length < 25){
    fibonacciArray.push(nr1);
    temp = nr1 + nr2;
    nr1 = nr2;
    nr2 = temp;
}
console.log(fibonacciArray);
// Step 1: Define the max value for the number guessing game
const maxValue = 5;

// Step 2: Generate a random number for the solution
const solution = Math.floor(Math.random() * maxValue) + 1;
console.log("Solution:", solution); // Comment out this line when the game is complete

// Step 3: Initialize a variable to track whether the answer is correct
let isCorrect = false;

// Step 4: Use a while loop to ask the user for guesses
while (!isCorrect) {
  const guess = Number(prompt(`Enter a number between 1 and ${maxValue}:`));

  // Step 5: Check if the guess is correct and provide feedback
  if (guess === solution) {
    isCorrect = true;
    console.log("Congratulations! You guessed correctly.");
  } else if (guess < solution) {
    console.log("Too low. Try again.");
  } else {
    console.log("Too high. Try again.");
  }
}
//do while loops
/*do {
 // code to be executed if the condition is true
} while (condition);*/
let number;
do {
 number = prompt("Please enter a number between 0 and 100: ");
} while (!(number >= 0 && number < 100));
console.log(number);
//practise exercise



