#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');
const deleteFile = require('./utils/deleteFile');

program.version('1.0.0').description('Simple Password Generator');

program
.option('--length <number of characters>', 'desired password length', '8')
.option('--save', 'save to passwords.txt file')
.option('--clear', 'clear passwords.txt file')
.option('-nn, --no-numbers', 'no numbers in password')
.option('-nc, --no-capitals', 'no capital letters')
.option('-ns, --no-symbols', 'no symbols in password')
.parse();

const { length, save, numbers, symbols, capitals, clear } = program.opts();

const generatedPassword = createPassword(length, numbers, symbols, capitals); 

// save password.txt to file
if(save) {
    savePassword(generatedPassword);
}

if(clear) {
    deleteFile();
}

// copy to clipboard
clipboardy.writeSync(generatedPassword);

console.log(chalk.cyanBright('New Password: ') + chalk.magenta(generatedPassword));
console.log(chalk.green('Copied to clipboard!'));