const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const deleteFile = () => {
    fs.writeFile('./passwords.txt', '', function(){console.log(chalk.red('Cleared history from passwords.txt'))})
}

module.exports = deleteFile;