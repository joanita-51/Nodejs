const fs = require('node:fs');
// fs.readFile('test.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });
// console.log("We are nerds!!")

// Alternatively

try {
  const data = fs.readFileSync('test.txt', 'utf8');
  console.log("METHOD 2 .....")
  console.log(data);
} catch (err) {
  console.error(err);
}
console.log("We are nerds!!")