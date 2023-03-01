let text = `Hello World!`
console.log(text)

// Multiline Strings
let text1 = `The quick
brown fox
jumps over
the lazy dog`
console.log(text1)

// interpolation

/*Template literals provide an easy way to interpolate variables and expressions into strings.

The method is called string interpolation.

The syntax is: */
//Variable Substitutions
let firstName = 'John'
let lastName = 'Doe'

let fullName = `Welcome ${firstName}, ${lastName}!`
console.log(fullName)

// HTML Templates
let header = 'Templates Literals'
let tags = ['template literals', 'javascript', 'es6']

let html = `<h2>${header}</h2><ul>`
for (const x of tags) {
  html += `<li>${x}</li>`
}

html += `</ul>`
