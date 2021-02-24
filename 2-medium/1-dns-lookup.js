const readline = require('readline');
const dns = require('dns');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Domain name: ', (answer) => {
    const domainName = answer
    dns.lookup(domainName, (err, address, family) => {
        if(err){
            console.log(err)
        }else{
            console.log('\n\nDomain Name: ' + domainName + '\nIP Address: ' + address + '\nFamily: ' + family)
        }
    })
    
    rl.close();
})