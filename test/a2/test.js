/* globals it, describe */
const { getCode, keyMaps } = require('../../src/a2/sol.js')
const { readFile } = require('fs')
const firstInput = `ULL\nRRDDD\nLURDL\nUUUUD`

readFile('solInput', 'utf8', () => { console.log('callback') })

var assert = require('assert')
describe('solution', function () {
  it('return correct answer for problem 1 and the example', function (done) {
    const { readFile } = require('fs')

    assert.equal('1985', getCode(firstInput, keyMaps.simple).foundNumbers.join(''))

    readFile('test/a2/solInput', 'utf8', (err, data) => {
      if (err) throw new Error(err)
      const strippedData = data.substring(0, data.length - 1)
      assert.equal('69642', getCode(strippedData, keyMaps.simple).foundNumbers.join(''))
      done()
    })
  })
})

describe('solution', function () {
  it('return correct answer for problem 2 and the example', function (done) {
    const { readFile } = require('fs')

    assert.equal('5DB3', getCode(firstInput, keyMaps.complex).foundNumbers.join(''))

    readFile('test/a2/solInput', 'utf8', (err, data) => {
      if (err) throw new Error(err)
      const strippedData = data.substring(0, data.length - 1)
      assert.equal('8CB23', getCode(strippedData, keyMaps.complex).foundNumbers.join(''))
      done()
    })
  })
})

