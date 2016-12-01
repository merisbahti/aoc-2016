const readFile = require('fs').readFile
readFile('./testInput', 'utf8', (err, contents) => {
  console.log(err)
  console.log(contents)
})

const sol = require('../../src/a1/sol.js')
const { dist } = sol
const prob = `R4, R1, L2, R1, L1, L1, R1, L5, R1, R5, L2, R3, L3, L4, R4, R4, R3, L5, L1, R5, R3, L4, R1, R5, L1, R3, L2, R3, R1, L4, L1, R1, L1, L5, R1, L2, R2, L3, L5, R1, R5, L1, R188, L3, R2, R52, R5, L3, R79, L1, R5, R186, R2, R1, L3, L5, L2, R2, R4, R5, R5, L5, L4, R5, R3, L4, R4, L4, L4, R5, L4, L3, L1, L4, R1, R2, L5, R3, L4, R3, L3, L5, R1, R1, L3, R2, R1, R2, R2, L4, R5, R1, R3, R2, L2, L2, L1, R2, L1, L3, R5, R1, R4, R5, R2, R2, R4, R4, R1, L3, R4, L2, R2, R1, R3, L5, R5, R2, R5, L1, R2, R4, L1, R5, L3, L3, R1, L4, R2, L2, R1, L1, R4, R3, L2, L3, R3, L2, R1, L4, R5, L1, R5, L2, L1, L5, L2, L5, L2, L4, L2, R3`
const inputsAnswersMap = {
  'R2, L3': 5,
  'R2, R2, R2': 2,
  'R5, L5, R5, R3': 12
}

Object.keys(inputsAnswersMap).forEach(k => {
  const corr = inputsAnswersMap[k]
  const ans = dist(k)
  console.log(`For input: ${k}, answer is ${corr} and you got: ${ans.dist}
which is: ${corr === ans.dist ? 'correct' : 'false'}`)
})
const probAnswer = dist(prob)
console.log(`For the problem, the answer is: ${probAnswer.dist},
and the first point visited twice is ${probAnswer.firstVisitedTwice}`)
