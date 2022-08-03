/* /* Errors */

/* Type Error */
const i = 0
// i = 5

/* Reference Error */
// console.log(j)

/* Custom function 

const sum = (a, b) => {
  if ((a !== 0 && !a) || (b !== 0 && !b)) throw new TypeError('Invalid Arg.')
  return a + b
}*/
// console.log(sum(3, 4)) // happy path
// console.log(sum(1)) // sad path

/* Handling Errors */

const foo = () => {
  try {
    console.log(sum(1))
  } catch (e) {
    // log with if statements
    console.log('We got an error')
    throw e
  } finally {
    console.log('We are at the final step')
  }
}
try {
  foo()
} catch {
  console.log('error handled in foo')
}
console.log('Outside try - catch')

console.log(window)

document.body.children[0].style.color='red'