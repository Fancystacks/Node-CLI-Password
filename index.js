const program = require('commander');

program.version('1.0.0').description('Simple Password Generator');

program.option('--length <number of characters>', 'desired password length', '8').parse();

console.log(program.opts());