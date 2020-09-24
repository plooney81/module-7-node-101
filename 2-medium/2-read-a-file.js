const fs = require('fs');
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('filename: ', function(filename) {
  rl.close();
  fs.readFile(filename, function(error, buffer) {
    if (error) {
      console.log(error.message);
      return;
    }
    const content = buffer.toString();
    const upperCased = content.toUpperCase();
    console.log(upperCased);
  });
});