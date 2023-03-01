function printVariable(variabe) {
  console.log(variabe)
}
function func(x) {
  x('hello world')
}
func(printVariable)

function sumCallback(a, b, callback) {
  callback(a + b)
}
function handleSum(sum) {
  console.log(sum)
}
sumCallback(1, 2, handleSum)

function printName(name, callback) {
  callback('hello ' + name)
}
printName('samad', printVariable)
