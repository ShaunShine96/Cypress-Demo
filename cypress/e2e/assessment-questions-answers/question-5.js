// Create an empty array to store numbers
let numbers = [];

// Generate 10 random numbers between 1 and 1000
for (let i = 0; i < 10; i++) {
  let randomNum = Math.floor(Math.random() * 1000) + 1; // Generate a random number
  numbers.push(randomNum); // Add it to the array
}

// Print each number in the array
console.log("Generated numbers:");
for (let num of numbers) {
  console.log(num);
}

// Calculate the sum of all numbers
let sum = 0;
for (let num of numbers) {
  sum += num; // Add each number to sum
}

// Print the sum
console.log("Sum of the array:", sum);

/*
Notes:
    To see the ouput, on the terminal run this code
        node cypress/e2e/assessment-questions-answers/question-5.js
*/
