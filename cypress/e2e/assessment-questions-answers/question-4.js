function generateSequence(n) {
  let seq = [1, 2]; // Start with the first two numbers

  for (let i = 2; i < n; i++) {
    let prev1 = seq[i - 1]; // Last number
    let prev2 = seq[i - 2]; // Second last number

    if (i % 2 === 0) {
      seq.push(prev1 * prev2); // Multiply the last two numbers
    } else {
      seq.push(prev1 + prev2); // Add the last two numbers
    }
  }

  return seq;
}

// Run the function and print the sequence
console.log(generateSequence(12)); // Generate 12 numbers

/*
Notes:
    To see the ouput, on the terminal run this code
        node cypress/e2e/assessment-questions-answers/question-4.js
*/
