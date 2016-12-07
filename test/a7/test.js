/* globals it, describe */
const { sol, checkAbbaSupport } = require('../../src/a7/sol.js')
const readFile = require('fs').readFile
const assert = require('assert')

describe('solution', function () {
  it('return correct answer for the examples', function (done) {
    [
      ['abba[mnop]qrst', true],
      ['abcd[bddb]xyyx', false],
      ['aaaa[qwer]tyui', false],
      ['ioxxoj[asdfgh]zxcvbn', true]
    ].forEach(([input, answer]) => assert.equal(answer, checkAbbaSupport(input)))
    done()
  })
})

describe('solution', function () {
  it('return correct answer for problem 1', function (done) {
    readFile('test/a7/problemInput', 'utf8', (err, data) => {
      if (err) throw new Error(err)
      assert.equal('', sol(data.trim()))
      done()
    })
  })
})

