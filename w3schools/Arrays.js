// You can also create an array, and then provide the elements:
const cars = []
cars[0] = 'Saab'
cars[1] = 'Volvo'
cars[2] = 'BMW'
console.log(cars)

// Using the JavaScript Keyword new
// // The following example also creates an Array, and assigns values to it:

// const cars = new Array('Saab', 'Volvo', 'BMW')

// Array Properties and Methods
cars.length // Returns the number of elements
cars.sort() // Sorts the array

// Splicing and Slicing Arrays
// The splice() method adds new items to an array.

// The slice() method slices out a piece of an array.
const fruits = ['Banana', 'Orange', 'Apple', 'Mango']
fruits.splice(2, 0, 'Lemon', 'Kiwi')
// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// The splice() method returns an array with the deleted items:

const a = [1, 2, 3, 4, 5]
a.forEach((number, index) => {
  console.log(number + ' ' + index)
})
// const b = [2, 4, 6, 8, 10]

const newA = a.map((number) => {
  return number * 2
})
console.log(newA)

const newB = a.filter((number) => {
  return number <= 2
})
console.log(newB)

const newC = a.find((number) => {
  return number > 3
})
console.log(newC)

const isTrue = a.some((number) => {
  return number > 8
})
console.log(isTrue)

const newD = a.reduce((sum, number) => {
  return sum + number
}, 0)
console.log(newD)

const items = [
  {
    price: 10,
  },
  {
    price: 20,
  },
  {
    price: 14,
  },
  {
    price: 1,
  },
  {
    price: 50,
  },
]

const total = items.reduce((sum, item) => {
  return sum + item.price
}, 0)
console.log(total)

const m = [1, 2, 3, 4, 5]
const isPresent = m.includes(2)
console.log(isPresent)
