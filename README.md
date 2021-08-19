# Node-CLI-Password

## Download:

`npm install` dependencies

- chalkJS
- clipboardy
- commander

## Usage:

![cli1](https://user-images.githubusercontent.com/38336934/130021776-0dd31fe0-2314-4727-9cf2-e94021c0b82b.gif)

Run program globally via symlink as `Node-CLI-Password` or program name.

- Password defaults to 8 letters containing all options of characters.
- use `--help` to see all options

Password will copy to clipboard automatically.

![cli2](https://user-images.githubusercontent.com/38336934/130022305-1d5db557-84ee-4ac5-bff6-7aa3629d4e28.gif)

- Use `--length=<value>` to select length
  - `-nn` for no numbers
  - `-ns` for no symbols
  - `-nc` for no capital letters
- `--save` will save all passwords in a passwords.txt file

![cli3](https://user-images.githubusercontent.com/38336934/130022717-d520ac6b-31e2-4173-8e54-32dcc9feaa1b.gif)

Use `--clear` to delete all saved passwords from passwords.txt file.
