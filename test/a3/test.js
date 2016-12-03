/* globals it, describe */
const { triangleChecker, rowParser, colParser } = require('../../src/a3/sol.js')
const { readFile } = require('fs')

readFile('solInput', 'utf8', () => { console.log('callback') })

var assert = require('assert')
describe('solution', function () {
  it('return correct answer for the example', function () {
    assert.equal(0, triangleChecker('5 10 25', rowParser))
  })
})

describe('solution', function () {
  it('return correct answer for problem 1', function (done) {
    const { readFile } = require('fs')
    readFile('test/a3/solInput', 'utf8', (err, data) => {
      if (err) throw new Error(err)
      assert.equal(993, triangleChecker(data, rowParser))
      done()
    })
  })
})

describe('solution', function () {
  it('return correct answer for problem 2 and the example', function (done) {
    const { readFile } = require('fs')
    readFile('test/a3/solInput', 'utf8', (err, data) => {
      if (err) throw new Error(err)
      assert.equal(1849, triangleChecker(data, colParser))
      done()
    })
  })
})
