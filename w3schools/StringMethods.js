let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let length = text.length
console.log(length)

// Extracting String Parts
let Slice = 'Apple, Banana, Kiwi'
let Part = Slice.slice(7, 13)
console.log(Part)

// JavaScript String substring()
let str = 'Apple, Banana, Kiwi'
let part = str.substring(7, 13)

console.log(part)

// Replacing String Content
let Text = 'Please visit Microsoft!'
let newText = Text.replace('Microsoft', 'W3Schools')

console.log(newText)
// To replace case insensitive, use a regular expression with an /i flag (insensitive):

let sensitive = 'Please visit Microsoft!'
let newSensitive = sensitive.replace(/MICROSOFT/i, 'W3Schools')
console.log(newSensitive)

//JavaScript String toUpperCase()
let text1 = 'Hello World!'
let text2 = text1.toUpperCase()
console.log(text2)

// JavaScript String toLowerCase()
// let text1 = "Hello World!";       // String
// let text2 = text1.toLowerCase();  // text2 is text1 converted to lower

// JavaScript String concat()
// concat() joins two or more strings:
let text3 = 'Hello'
let text4 = 'World'
let text5 = text1.concat(' ', text2)

console.log(text5)
