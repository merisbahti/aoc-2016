/* globals it, describe */
const { getPass } = require('../../src/a5/sol.js')
var assert = require('assert')

describe('solution', function () {
  it('return correct answer for problem 1', function (done) {
    assert.equal('18f47a30', getPass('abc'))
    done()
  }).timeout(100000)
})

describe('solution', function () {
  it('return correct answer for the example', function (done) {
    assert.equal('801b56a7', getPass('abbhdwsy'))
    done()
  }).timeout(100000)
})

