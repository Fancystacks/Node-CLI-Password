const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789';
const symbols = '!@#$%^&*';

const createPassword = (length = 8, hasCapitals = true, hasNumbers = true, hasSymbols = true) => {
    let chars = alphabet;
    hasNumbers ? (chars + numbers) : ''
    hasSymbols ? (chars + symbols) : ''
    hasCapitals ? (chars + capitals) : ''
    return chars
}

module.exports = createPassword;