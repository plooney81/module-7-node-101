const readline = require('readline');
const dns = require('dns');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What domain would you like to look up? ', (answer) => {
  dns.lookup(answer, (error, address) => {
    if (error) {
      console.error(error.message);
      return;
    }
    console.log(address);
  });
  rl.close();
});