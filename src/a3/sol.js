const chunk = (array, chunkSize) => {
  return [].concat.apply([],
    array.map(function (elem, i) {
      return i % chunkSize ? [] : [array.slice(i, i + chunkSize)]
    })
  )
}
const triangleChecker = (input, parser) => {
  return parser(input).filter(checkTriangle).length
}
const rowParser = (input) => input.trim().split('\n').map(x => x.trim().split(/\s+/).map(xs => parseInt(xs)))
const colParser = (input) => {
  const initialState = [[], [], []]
  return chunk(rowParser(input).reduce((state, x) => {
    return [
      [...state[0], x[0]],
      [...state[1], x[1]],
      [...state[2], x[2]]
    ]
  }, initialState).join().split(',').map(x => parseInt(x)), 3)
}

const checkTriangle = t => t[0] + t[1] > t[2] && t[1] + t[2] > t[0] && t[2] + t[0] > t[1]

module.exports = { triangleChecker, rowParser, colParser }
