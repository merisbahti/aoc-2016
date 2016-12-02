/* globals describe, it */
const sol = require('../../src/a1/sol.js')
const { dist } = sol

const assert = require('assert')
describe('solution', function () {
  it('should return correct answer for examples', function (done) {
    const inputsAnswersMap = {
      'R2, L3': 5,
      'R2, R2, R2': 2,
      'R5, L5, R5, R3': 12
    }
    Object.keys(inputsAnswersMap).forEach(k => {
      const corr = inputsAnswersMap[k]
      const ans = dist(k)
      assert.equal(corr, ans.dist)
    })
    done()
  })
})

describe('solution', function () {
  it('should return correct answer for problem', function (done) {
    const readFile = require('fs').readFile
    readFile('test/a1/solInput', 'utf8', (err, contents) => {
      if (err) throw new Error(err)
      console.log(contents)
      const probAnswer = dist(contents).firstVisitedTwice
      assert.equal(110, probAnswer.reduce((a, x) => Math.abs(a) + Math.abs(x), 0))
      done()
    })
  })
})
