// JavaScript code illustrating key concepts
let message = "Hello, Node.js!";

console.log(message)

function greet(name) {
  return `Greetings, ${name}!`;
}
console.log(greet("Anita"))

// const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// const fs = require('node:fs')
// try {
//     const data = fs.readFileSync('example.txt', 'utf8' )
//     console.log('File content:', data)

// } catch (error) {
//     console.error(error)
// }

// console.log("Read file synchronously")

// const readline = require('node:readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`);
//     readline.close();
//   });
