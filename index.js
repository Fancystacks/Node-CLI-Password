const { program } = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const createPassword = require('./utils/createPassword');

program.version('1.0.0').description('Simple Password Generator');

program
.option('--length <number of characters>', 'desired password length', '8')
.option('--save', 'save to passwords.txt file')
.option('-nn, --no-numbers', 'no numbers in password')
.option('-nc, --no-capitals', 'no capital letters')
.option('-ns, --no-symbols', 'no symbols in password')
.parse();

const { length, save, numbers, symbols, capitals } = program.opts();

const generatedPassword = createPassword(length, numbers, symbols, capitals); 

// copy to clipboard
clipboardy.writeSync(generatedPassword);

console.log(chalk.cyanBright('New Password: ') + chalk.magenta(generatedPassword));
console.log(chalk.green('Copied to clipboard!'));