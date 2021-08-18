const program = require('commander');

program.version('1.0.0').description('Simple Password Generator');

program
.option('--length <number of characters>', 'desired password length', '8')
.option('--save', 'save to passwords.txt file')
.option('-nn, --no-numbers', 'no numbers in password')
.option('-ns, --no-symbols', 'no symbols in password')
.parse();

const { length, save, numbers, symbols } = program.opts();

console.log(symbols, numbers, length);