/* globals it, describe */
const { frequencyAnalysis } = require('../../src/a6/sol.js')
const readFile = require('fs').readFile
var assert = require('assert')

describe('solution', function () {
  it('return correct answer for the example', function (done) {
    readFile('test/a6/exampleInput', 'utf8', (err, data) => {
      if (err) throw new Error(err)
      assert.equals('easter', frequencyAnalysis(data.trim()))
      done()
    })
  })
})

describe('solution', function () {
  it('return correct answer for problem 1', function (done) {
    readFile('test/a6/problemInput', 'utf8', (err, data) => {
      if (err) throw new Error(err)
      assert.equals('', frequencyAnalysis(data.trim()))
      done()
    })
  })
})

