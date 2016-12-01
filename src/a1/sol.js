/* @flow */
const a: number = 3
function addOne(x: number) {
  return x + 1
}
console.log(addOne(a))
console.log(addOne('a'))
export default addOne
